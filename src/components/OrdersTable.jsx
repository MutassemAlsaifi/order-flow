function OrdersTable({ orders = [] }) {
  return (
    <div className="orders-table-container">

      <table className="orders-table">

        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id ?? index}>

              <td>#{order.id ?? '—'}</td>

              <td>{order.customer || 'Unknown'}</td>

              <td>
                {Number.isFinite(order.amount)
                  ? `€${order.amount.toFixed(2)}`
                  : '—'}
              </td>

              <td>
                <span className={`order-status ${order.status}`}>
                  <span className="order-status-dot" />
                  {order.status || 'Missing'}
                </span>
              </td>

              <td>{order.date || '—'}</td>

              <td>{order.country || '—'}</td>

            </tr>
          ))}
        </tbody>

      </table>

      {orders.length === 0 && (
        <div className="orders-empty">
          No orders found
        </div>
      )}

    </div>
  )
}

export default OrdersTable