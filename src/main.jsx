import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Tool from './pages/Tool'
import Layout from './components/Layout'
import './index.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isKorean = location.pathname.startsWith('/ko')

  const toggleLang = () => {
    const newPath = isKorean
      ? location.pathname.replace('/ko', '') || '/'
      : '/ko' + location.pathname
    navigate(newPath)
  }

  return (
    <Layout isKorean={isKorean} onToggleLang={toggleLang}>
      <Routes>
        <Route path="/" element={<Home lang="en" />} />
        <Route path="/ko" element={<Home lang="ko" />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/ko/tool" element={<Tool />} />
      </Routes>
    </Layout>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)