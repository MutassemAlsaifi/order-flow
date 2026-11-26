import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

import './Analytics.css'

function RevenueChart({ data = [] }) {

    return (
        <article className="analytics-card">

            <h3>Order Value Distribution</h3>

            <p>
                Distribution of valid paid orders by amount.
            </p>

            <div style={{ width: '100%', height: 300 }}>

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#e4e4e7"
                        />

                        <XAxis
                            dataKey="range"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            allowDecimals={false}
                        />

                        <Tooltip
                            cursor={{ fill: '#f4f4f5' }}
                        />

                        <Bar
                            dataKey="count"
                            name="Paid orders"
                            fill="#18181b"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={55}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </article>
    )
}

export default RevenueChart