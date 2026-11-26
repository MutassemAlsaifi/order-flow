function validateOrder(order) {
    const errors = []

    // Validate order object
    if (!order || typeof order !== 'object' || Array.isArray(order)) {
        return {
            isValid: false,
            errors: ['Invalid order']
        }
    }

    // Validate ID
    if (order.id == null || String(order.id).trim() === '') {
        errors.push('Missing ID')
    }

    // Validate amount
    if (order.amount == null || order.amount === '') {
        errors.push('Missing amount')
    } else if (!Number.isFinite(order.amount)) {
        errors.push('Invalid amount type')
    } else if (order.amount <= 0) {
        errors.push('Non-positive amount')
    }

    // Validate status
    const validStatuses = ['paid', 'pending', 'cancelled']

    if (!order.status) {
        errors.push('Missing status')
    } else if (!validStatuses.includes(order.status)) {
        errors.push('Invalid status')
    }

   
    return {
        isValid: errors.length === 0,
        errors
    }
}

export default validateOrder