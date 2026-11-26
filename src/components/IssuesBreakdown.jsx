function IssuesBreakdown({ issues = [] }) {

  const maxCount = Math.max(
    1,
    ...issues.map(issue => issue.count)
  )

  return (
    <section className="quality-card">

      <h2>Detected issues</h2>
      <p>Distribution of validation errors</p>

      <div className="issues-list">

        {issues.map(issue => (
          <div className="issue-item" key={issue.type}>

            <div className="issue-header">
              <span>{issue.type}</span>
              <strong>{issue.count}</strong>
            </div>

            <div className="issue-track">
              <div
                className="issue-fill"
                style={{
                  width: `${issue.count / maxCount * 100}%`
                }}
              />
            </div>

          </div>
        ))}

        {issues.length === 0 && (
          <p className="quality-empty">
            No validation issues to display
          </p>
        )}

      </div>

    </section>
  )
}

export default IssuesBreakdown