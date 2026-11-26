import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Overview from './components/Overview'
function App() {
    const [activePage, setActivePage] = useState('overview')

   return (
    <div>
      <Header />
      <Navigation activePage={activePage}
        setActivePage={setActivePage} />
        {activePage === 'overview' && <Overview />}
    </div>
    
  )
}

export default App
