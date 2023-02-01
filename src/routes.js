import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Moments from './pages/Moments/Moments'
import NoPage from './pages/NoPage/NoPage'
import Schedules from './pages/Schedules/Schedules'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Moments />} />
          <Route path="eventos" element={<Schedules />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
