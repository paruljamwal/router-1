import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import {Routes,Route} from 'react-router-dom'
import { Navbar } from './components/navbar'
import { UsersList } from './components/userList'
import { UserDetails } from './components/userDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/users' element={<UsersList></UsersList>}></Route>
        <Route path='/users/:id' element={<UserDetails></UserDetails>}></Route>  
        
      </Routes>
    </div>
  )
}

export default App
