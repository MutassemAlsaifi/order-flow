import {
  ShieldCheck,
  CircleCheck,
  TriangleAlert
} from 'lucide-react'

import StatsCard from './StatsCard'
import QualityScore from './QualityScore'
import IssuesBreakdown from './IssuesBreakdown'
import InvalidOrdersTable from './InvalidOrdersTable'

import './DataQuality.css'

function DataQuality({
  stats = null,
  issues = [],
  invalidRecords = []
}) {

  const total = stats?.total ?? 0
  const valid = stats?.valid ?? 0

  const score = total > 0
    ? `${(valid / total * 100).toFixed(1)}%`
    : '—'

  return (
    <section className="quality-page">

      <div className="quality-heading">
        <h1>Data Quality</h1>
        <p>Monitor data integrity and identify invalid records.</p>
      </div>

      <div className="quality-stats-grid">

        <StatsCard
          title="Quality score"
          value={score}
          description="Percentage of valid records"
          icon={<ShieldCheck size={18} />}
        />

        <StatsCard
          title="Valid records"
          value={stats?.valid ?? '—'}
          description="Records passing validation"
          icon={<CircleCheck size={18} />}
        />

        <StatsCard
          title="Invalid records"
          value={stats?.invalid ?? '—'}
          description="Records requiring attention"
          icon={<TriangleAlert size={18} />}
        />

      </div>

      <div className="quality-analytics-grid">

        <QualityScore total={total} valid={valid} />

        <IssuesBreakdown issues={issues} />

      </div>

      <InvalidOrdersTable records={invalidRecords} />

    </section>
  )
}

export default DataQuality