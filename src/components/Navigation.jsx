import { LayoutDashboard, List, ShieldCheck } from 'lucide-react'
import './Navigation.css'
import Overview from './Overview'

function Navigation({ activePage, setActivePage }) {
  return (
    <nav className="navigation">

      <button className= {`nav-item ${activePage === 'overview' ? 'active' : ''}`} onClick={()=>setActivePage('overview')}>
        <LayoutDashboard size={18} strokeWidth={1.75} />
        <span>Overview</span>
      </button>

      <button className={`nav-item ${activePage === 'orders' ? 'active' : ''}`} onClick={()=>setActivePage('orders')}>
        <List size={18} strokeWidth={1.75} />
        <span>Orders</span>
      </button>

      <button className={`nav-item ${activePage === 'quality' ? 'active' : ''}`} onClick={()=>setActivePage('quality')}>
        <ShieldCheck size={18} strokeWidth={1.75} />
        <span>Data Quality</span>
      </button>

    </nav>
  )
}

export default Navigation