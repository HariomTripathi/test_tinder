import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Login from './components/Login'
import Body from './components/Body'
import Feeds from './components/Feeds'
import Notfound from './components/Notfound'
import store from './utils/store'   

import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen' >
      <Provider  store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feeds' element={<Feeds/>}/>
          <Route path='*' element={<Notfound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
