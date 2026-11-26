function QualityScore({ total = 0, valid = 0 }) {

  const score = total > 0 ? (valid / total) * 100 : 0

  return (
    <section className="quality-card">

      <h2>Data integrity</h2>

      <div className="quality-score-header">
        <strong>
          {total > 0 ? `${score.toFixed(1)}%` : '—'}
        </strong>

        <span>{valid} of {total} records</span>
      </div>

      <div className="quality-progress">
        <div
          className="quality-progress-valid"
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="quality-legend">
        <span>Valid records</span>
        <span>Invalid records</span>
      </div>

    </section>
  )
}

export default QualityScore