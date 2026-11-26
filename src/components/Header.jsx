import { Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import './Header.css'

function Header({loading , error}) {
     let connectionStatus = 'connected'
    let connectionText = 'API connected'

    if (loading) {
        connectionStatus = 'connecting'
        connectionText = 'Connecting...'
    } else if (error) {
        connectionStatus = 'disconnected'
        connectionText = 'Not connected'
    }
  return (
    <header className="header">

      <div className="header-brand">
        <div className="header-logo">
          <Layers size={24} />
        </div>

        <div className="header-title">
          <h1>OrderFlow</h1>
          <p>Order analytics</p>
        </div>
      </div>

      <div className="header-actions">
        <div className={`connection-status ${connectionStatus}`}>

    <span className="status-dot"></span>

    <span>{connectionText}</span>

</div>

        <a
          href="https://github.com/MutassemAlsaifi/order-flow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
        >
          <FaGithub size={24} />
        </a>
      </div>

    </header>
  )
}

export default Header