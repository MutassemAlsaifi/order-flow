import { describe, it, expect } from 'vitest'
import processOrders from './orderProcessing'

describe('Order analytics', () => {

    const orders = [
        { id: '1', customer: 'John', amount: 100, status: 'paid' },
        { id: '2', customer: 'Mark', amount: 350, status: 'paid' },
        { id: '3', customer: 'Adam', amount: 300, status: 'pending' },
        { id: '4', customer: 'Alex', amount: 200, status: 'cancelled' },
        { id: '5', customer: 'Sam', amount: -50, status: 'paid' }
    ]

    it('calculates dashboard statistics', () => {

        const { stats } = processOrders(orders)

        expect(stats).toEqual({
            total: 5,
            valid: 4,
            invalid: 1,
            revenue: 450,
            paid: 2,
            pending: 1,
            cancelled: 1
        })
    })

    it('identifies invalid records', () => {

        const { invalidRecords } = processOrders(orders)

        expect(invalidRecords).toHaveLength(1)
        expect(invalidRecords[0].id).toBe('5')
        expect(invalidRecords[0].status).toBe('invalid')
    })

    it('counts validation issues', () => {

        const { issues } = processOrders(orders)

        expect(issues).toContainEqual({
            type: 'Non-positive amount',
            count: 1
        })
    })

    it('calculates the order value distribution', () => {

        const { distribution } = processOrders(orders)

        expect(distribution[0].count).toBe(1)
        expect(distribution[1].count).toBe(1)
    })

    it('handles an empty dataset', () => {

        const { stats } = processOrders([])

        expect(stats.total).toBe(0)
        expect(stats.revenue).toBe(0)
        expect(stats.invalid).toBe(0)
    })
})