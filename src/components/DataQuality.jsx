import { useState } from 'react'

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
const [currentPage, setCurrentPage] = useState(1)

const recordsPerPage = 20

const totalPages = Math.ceil(
    invalidRecords.length / recordsPerPage
)

const lastIndex = currentPage * recordsPerPage

const firstIndex = lastIndex - recordsPerPage

const currentRecords = invalidRecords.slice(
    firstIndex,
    lastIndex
)
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

<InvalidOrdersTable records={currentRecords} />
<div className="pagination">

    <span>
        Showing {invalidRecords.length ? firstIndex + 1 : 0}
        –{Math.min(lastIndex, invalidRecords.length)}
        {' of '}{invalidRecords.length} invalid records
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

export default DataQuality