import { Routes, Route, Navigate } from 'react-router-dom'
import { About } from '../About/About'
import { Home } from '../Home/Home'
import { Portfolio } from '../Portfolio/Portfolio'
import { Projects } from '../Projects/Projects'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
