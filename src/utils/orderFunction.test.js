import { describe, it, expect } from 'vitest'
import { handelOrder } from './orderFunction'

describe('Order processing function', () => {

    it('calculates the total and count of paid orders', () => {

        const orders = [
            { amount: 100, status: 'paid' },
            { amount: 50, status: 'paid' },
            { amount: 200, status: 'pending' },
            { amount: 300, status: 'cancelled' }
        ]

        expect(handelOrder(orders)).toEqual({
            sum: 150,
            count: 2
        })
    })

    it('ignores invalid amounts', () => {

        const orders = [
            { amount: -50, status: 'paid' },
            { amount: 0, status: 'paid' },
            { amount: '100', status: 'paid' },
            { amount: null, status: 'paid' }
        ]

        expect(handelOrder(orders)).toEqual({
            sum: 0,
            count: 0
        })
    })

    it('handles an empty array', () => {

        expect(handelOrder([])).toEqual({
            sum: 0,
            count: 0
        })
    })

    it('handles null orders', () => {

        const orders = [
            null,
            { amount: 50, status: 'paid' }
        ]

        expect(handelOrder(orders)).toEqual({
            sum: 50,
            count: 1
        })
    })

    it('handles decimal amounts', () => {

        const orders = [
            { amount: 0.1, status: 'paid' },
            { amount: 0.2, status: 'paid' }
        ]

        const result = handelOrder(orders)

        expect(result.sum).toBeCloseTo(0.3, 2)
        expect(result.count).toBe(2)
    })
})