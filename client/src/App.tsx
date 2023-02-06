import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { Router } from './Components/Router/Router'

function App() {
  return (
    <>
      <div className='h-screen dark:bg-slate-500'>
        <Navbar />
        <Router />
      </div>
    </>
  )
}

export default App
