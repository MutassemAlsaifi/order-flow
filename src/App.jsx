import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Overview from './components/Overview'
import Orders from './components/Orders'
import DataQuality from './components/DataQuality'
import { useEffect } from 'react'
import fetchOrders from './services/orderService'
import processOrders from './utils/orderProcessing'

function App() {
   const [activePage, setActivePage] = useState('overview')
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {

    async function loadOrders() {
      try {
        const data = await fetchOrders()
        setOrders(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadOrders()

  }, [])
  const {
    stats,
    issues,
    invalidRecords,
    processedOrders
    ,distribution
  } = processOrders(orders)
 console.log('App stats:', stats)
console.log('Original order:', orders[0])
console.log('Invalid record:', invalidRecords[0])
console.log('All issues:', issues)
return (
    <>
        <Header />

        <Navigation
            activePage={activePage}
            setActivePage={setActivePage}
        />

        <main>

            {loading && <p>Loading orders...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
                <>
                    {activePage === 'overview' && (
                        <Overview stats={stats} distribution={distribution}/>
                    )}

                    {activePage === 'orders' && (
                        <Orders orders={processedOrders} />
                    )}

                    {activePage === 'quality' && (
                        <DataQuality
                            stats={stats}
                            issues={issues}
                            invalidRecords={invalidRecords}
                        />
                    )}
                </>
            )}

        </main>
    </>
)
}

export default App
