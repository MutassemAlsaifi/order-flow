import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {
    const [activePage, setActivePage] = useState('overview')

   return (
    <div>
      <Header />
      <Navigation activePage={activePage}
        setActivePage={setActivePage} />
    </div>
  )
}

export default App
