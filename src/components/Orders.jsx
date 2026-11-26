import { useState } from 'react'
import Filters from './Filters'
import OrdersTable from './OrdersTable'
import './Orders.css'

function Orders({ orders = [] }) {

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')

  const filteredOrders = orders.filter(order => {

    const query = search.trim().toLowerCase()

    const matchesSearch =
      String(order.id ?? '').includes(query) ||
      String(order.customer ?? '').toLowerCase().includes(query)

    const matchesStatus =
      status === 'all' || order.status === status

    return matchesSearch && matchesStatus
  })

  return (
    <section className="orders-page">

      <div className="orders-heading">
        <h1>Orders</h1>
        <p>Browse, search and filter incoming order records.</p>
      </div>

      <Filters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <OrdersTable orders={filteredOrders} />

      <div className="orders-footer">
        Showing {filteredOrders.length} of {orders.length} orders
      </div>

    </section>
  )
}

export default Orders