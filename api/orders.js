import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

export default function handler(req, res) {

    if (req.method !== 'GET') {
        return res.status(405).json({
            error: 'Method not allowed'
        })
    }

    try {
        const filePath = join(process.cwd(), 'db.json')
        const data = JSON.parse(readFileSync(filePath, 'utf8'))

        return res.status(200).json(data.orders)

    } catch {
        return res.status(500).json({
            error: 'Failed to load orders'
        })
    }
}