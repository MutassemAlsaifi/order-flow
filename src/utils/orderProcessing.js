import validateOrder from './dataValidation.js'
import { handelOrder } from './orderFunction'

function processOrders(orders) {

    const validOrders = []
    const invalidRecords = []
    const processedOrders = []
    const issueCounts = {}

    orders.forEach(order => {

        const result = validateOrder(order)

        if (result.isValid) {
            validOrders.push(order)
            processedOrders.push(order)
        } else {

            const invalidOrder = {
                ...order,
                originalStatus: order?.status,
                status: 'invalid',
                errors: result.errors
            }

            invalidRecords.push(invalidOrder)
            processedOrders.push(invalidOrder)

            result.errors.forEach(error => {
                issueCounts[error] = (issueCounts[error] || 0) + 1
            })
        }
    })

    // Reuse the original order processing function
    const result = handelOrder(validOrders)

    const stats = {
        total: orders.length,
        valid: validOrders.length,
        invalid: invalidRecords.length,

        revenue: result.sum,
        paid: result.count,

        pending: validOrders.filter(
            order => order.status === 'pending'
        ).length,

        cancelled: validOrders.filter(
            order => order.status === 'cancelled'
        ).length
    }

    const issues = Object.entries(issueCounts).map(
        ([type, count]) => ({ type, count })
    )
const distribution = [
    { range: '€0–200', count: 0 },
    { range: '€200–400', count: 0 },
    { range: '€400–600', count: 0 },
    { range: '€600–800', count: 0 },
    { range: '€800–1000', count: 0 },
    { range: '€1000+', count: 0 }
]

validOrders.forEach(order => {

    if (order.status !== 'paid') {
        return
    }

    if (order.amount < 200) {
        distribution[0].count++
    } else if (order.amount < 400) {
        distribution[1].count++
    } else if (order.amount < 600) {
        distribution[2].count++
    } else if (order.amount < 800) {
        distribution[3].count++
    } else if (order.amount < 1000) {
        distribution[4].count++
    } else {
        distribution[5].count++
    }
})
    return {
    stats,
    issues,
    invalidRecords,
    processedOrders,
    distribution
}
}

export default processOrders