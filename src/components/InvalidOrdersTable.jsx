function InvalidOrdersTable({ records = [] }) {

  return (
    <section className="quality-card">

      <h2>Invalid records</h2>
      <p>Orders requiring attention</p>

      <div className="invalid-table-container">

        <table className="invalid-table">

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Issue</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record, index) => (
              <tr key={record.id ?? index}>

                <td>#{record.id ?? '—'}</td>

                <td>{record.customer || 'Unknown'}</td>

                <td>
                  {record.amount == null
                    ? '—'
                    : String(record.amount)}
                </td>

                <td className="invalid-reason">
                  {record.errors?.join(', ') || 'Unknown'}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

        {records.length === 0 && (
          <p className="quality-empty">
            No invalid records to display
          </p>
        )}

      </div>

    </section>
  )
}

export default InvalidOrdersTable