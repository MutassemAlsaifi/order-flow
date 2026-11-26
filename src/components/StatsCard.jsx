import './StatsCard.css'

function StatsCard({ title, value, description, icon }) {
  return (
    <article className="stats-card">

      <div className="stats-card-header">
        <span>{title}</span>
        {icon}
      </div>

      <h2>{value}</h2>

      <p>{description}</p>

    </article>
  )
}

export default StatsCard