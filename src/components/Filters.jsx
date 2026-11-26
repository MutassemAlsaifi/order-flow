import { Search } from 'lucide-react'

function Filters({ search, setSearch, status, setStatus }) {
  return (
    <div className="order-filters">

      <div className="search-field">
        <Search size={18} />

        <input
          type="text"
          aria-label="Search orders"
          placeholder="Search by ID or customer..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <select
        aria-label="Filter by status"
        value={status}
        onChange={e => setStatus(e.target.value)}
      >
        <option value="all">All statuses</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
        <option value="invalid">Invalid</option>
      </select>

    </div>
  )
}

export default Filters