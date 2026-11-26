const API_URL = import.meta.env.DEV
    ? 'http://localhost:3000/orders'
    : '/api/orders'
async function fetchOrders() {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error('Failed to fetch orders')
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
        throw new Error('Invalid API response')
    }

    return data
}

export default fetchOrders