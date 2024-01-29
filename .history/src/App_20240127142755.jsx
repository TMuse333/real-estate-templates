



import { useState } from 'react'

import Homepage from './components/Homepage'

import './App.css'

import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

<Route path='/'
element={    <Homepage/>}
>

</Route>

<Route path='website-development'
element={<ServiceOverview/>}>
  
</Route>
    </Routes>

    </>
  )
}

export default App