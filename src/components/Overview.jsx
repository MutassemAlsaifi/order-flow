import {
  Wallet,
  ShoppingBag,
  CircleCheck,
  TriangleAlert
} from 'lucide-react'

import StatsCard from './StatsCard'
import './Overview.css'

function Overview() {
  return (
    <section className="overview">

      <div className="overview-heading">
        <h1>Overview</h1>
        <p>Monitor your store performance and order activity.</p>
      </div>

      <div className="stats-grid">

        <StatsCard
          title="Total revenue"
          value="—"
          description="Revenue from valid paid orders"
          icon={<Wallet size={18} />}
        />

        <StatsCard
          title="Total orders"
          value="—"
          description="All received records"
          icon={<ShoppingBag size={18} />}
        />

        <StatsCard
          title="Paid orders"
          value="—"
          description="Successfully paid orders"
          icon={<CircleCheck size={18} />}
        />

        <StatsCard
          title="Invalid records"
          value="—"
          description="Records requiring attention"
          icon={<TriangleAlert size={18} />}
        />

      </div>

    </section>
  )
}

export default Overview