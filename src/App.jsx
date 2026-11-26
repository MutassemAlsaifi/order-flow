import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Overview from './components/Overview'
import Orders from './components/Orders'
function App() {
    const [activePage, setActivePage] = useState('overview')

   return (
    <div>
      <Header />
      <Navigation activePage={activePage}
        setActivePage={setActivePage} />
        {activePage === 'overview' && <Overview />}
        {activePage === 'orders' && <Orders />}
    </div>
    
  )
}

export default App
