import { Routes, Route, Navigate } from 'react-router-dom'
import { NewNote } from './Components/NewNote'

function App() {
  return (
    <div className='container mx-auto my-4'>
      <Routes>
        <Route path='/' element={<h1 className='text-3xl font-bold relative'>Hello</h1>} />
        <Route path='/new' element={<NewNote />} />
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>}></Route>
          <Route path='edit' element={<h1>Edit</h1>}></Route>
        </Route>
        <Route path='/new' element={<h1>New</h1>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
