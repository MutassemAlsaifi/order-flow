import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import './Analytics.css'

function RevenueChart({ data = [] }) {
  return (
    <section className="analytics-card">

      <h2>Revenue over time</h2>
      <p>Revenue generated from valid paid orders</p>

      <div className="chart-container">
        {data.length === 0 ? (
          <p className="empty-state">No revenue data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data}>

              <CartesianGrid
                stroke="#e4e4e7"
                strokeDasharray="3 4"
                vertical={false}
              />

              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />

              <Area
                type="linear"
                dataKey="revenue"
                stroke="#18181b"
                strokeWidth={2}
                fill="#f1f1f3"
              />

            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

    </section>
  )
}

export default RevenueChart