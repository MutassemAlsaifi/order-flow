import './Analytics.css'

function OrderBreakdown({ stats = null }) {

  const categories = [
    { label: 'Paid', value: stats?.paid ?? 0, color: '#18181b' },
    { label: 'Pending', value: stats?.pending ?? 0, color: '#d4a654' },
    { label: 'Cancelled', value: stats?.cancelled ?? 0, color: '#a1a1aa' },
    { label: 'Invalid', value: stats?.invalid ?? 0, color: '#dc7373' }
  ]

  const total = categories.reduce(
    (sum, category) => sum + category.value, 0
  )

  return (
    <section className="analytics-card">

      <h2>Order breakdown</h2>
      <p>Distribution of received order records</p>

      <div className="breakdown-bar">
        {categories.map(category => (
          <div
            key={category.label}
            style={{
              width: `${total ? category.value / total * 100 : 0}%`,
              backgroundColor: category.color
            }}
          />
        ))}
      </div>

      <div className="breakdown-list">
        {categories.map(category => (
          <div className="breakdown-row" key={category.label}>

            <span
              className="category-dot"
              style={{ backgroundColor: category.color }}
            />

            <span>{category.label}</span>

            <strong>{stats ? category.value : '—'}</strong>

          </div>
        ))}
      </div>

    </section>
  )
}

export default OrderBreakdown