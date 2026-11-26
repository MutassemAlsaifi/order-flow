import {
  Wallet,
  ShoppingBag,
  CircleCheck,
  TriangleAlert
} from 'lucide-react'
import RevenueChart from './RevenueChart'
import OrderBreakdown from './OrderBreakdown'
import StatsCard from './StatsCard'
import './Overview.css'

function Overview({ stats ,distribution  }) {
    
  return (
    
    <section className="overview">

      <div className="overview-heading">
        <h1>Overview</h1>
        <p>Monitor your store performance and order activity.</p>
      </div>

      <div className="stats-grid">

        <StatsCard
    title="Total revenue"
    value={stats.revenue.toLocaleString('en-IE', {
    style: 'currency',
    currency: 'EUR'
})}
    description="Revenue from valid paid orders"
    icon={<Wallet size={18} />}
/>

        <StatsCard
          title="Total orders"
          value={stats.total.toLocaleString('en-IE')}
          description="All received records"
          icon={<ShoppingBag size={18} />}
        />

        <StatsCard
          title="Paid orders"
          value={stats.paid.toLocaleString('en-IE')}
          description="Successfully paid orders"
          icon={<CircleCheck size={18} />}
        />

        <StatsCard
          title="Invalid records"
          value={stats.invalid.toLocaleString('en-IE')}
          description="Records requiring attention"
          icon={<TriangleAlert size={18} />}
        />

      </div>
<div className="analytics-grid">
  <RevenueChart  data={distribution}/>
  <OrderBreakdown stats={stats} />
</div>
    </section>
  )
}

export default Overview