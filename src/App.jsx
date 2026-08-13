import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Booking from './pages/Booking.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <ScrollToHash />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/agendamento" element={<Booking />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
