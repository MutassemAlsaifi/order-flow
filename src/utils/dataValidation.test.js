import { describe, it, expect } from 'vitest'
import validateOrder from './dataValidation'

describe('Order validation', () => {

    const validOrder = {
        id: '1',
        customer: 'John Smith',
        amount: 100,
        status: 'paid'
    }

    it('accepts a valid order', () => {

        expect(validateOrder(validOrder)).toEqual({
            isValid: true,
            errors: []
        })
    })

    it('rejects negative amounts', () => {

        const result = validateOrder({
            ...validOrder,
            amount: -50
        })

        expect(result.isValid).toBe(false)
        expect(result.errors).toContain('Non-positive amount')
    })

    it('rejects unknown statuses', () => {

        const result = validateOrder({
            ...validOrder,
            status: 'unknown'
        })

        expect(result.isValid).toBe(false)
        expect(result.errors).toContain('Invalid status')
    })

    it('detects multiple errors', () => {

        const result = validateOrder({
            ...validOrder,
            amount: -50,
            status: 'unknown'
        })

        expect(result.isValid).toBe(false)
        expect(result.errors).toHaveLength(2)
    })

    it('rejects null records', () => {

        expect(validateOrder(null)).toEqual({
            isValid: false,
            errors: ['Invalid order']
        })
    })
})