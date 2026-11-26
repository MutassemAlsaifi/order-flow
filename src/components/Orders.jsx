import { useState } from 'react'
import Filters from './Filters'
import OrdersTable from './OrdersTable'
import './Orders.css'

function Orders({ orders = [] }) {
const [currentPage, setCurrentPage] = useState(1)

const ordersPerPage = 20
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
const totalPages = Math.ceil(
    filteredOrders.length / ordersPerPage
)

const lastIndex = currentPage * ordersPerPage

const firstIndex = lastIndex - ordersPerPage

const currentOrders = filteredOrders.slice(
    firstIndex,
    lastIndex
)
  return (
    <section className="orders-page">

      <div className="orders-heading">
        <h1>Orders</h1>
        <p>Browse, search and filter incoming order records.</p>
      </div>

      <Filters
    search={search}
    setSearch={(value) => {
        setSearch(value)
        setCurrentPage(1)
    }}
    status={status}
    setStatus={(value) => {
        setStatus(value)
        setCurrentPage(1)
    }}
/>

      <OrdersTable orders={currentOrders} />
<div className="pagination">

    <span>
        Showing {filteredOrders.length ? firstIndex + 1 : 0}
        –{Math.min(lastIndex, filteredOrders.length)}
        {' of '}{filteredOrders.length} orders
    </span>

    <div className="pagination-controls">

        <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
        >
            Previous
        </button>

        <span>
            Page {totalPages ? currentPage : 0} of {totalPages}
        </span>

        <button
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
        >
            Next
        </button>

    </div>

</div>
      

    </section>
  )
}

export default Orders