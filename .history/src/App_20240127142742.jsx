



import { useState } from 'react'

import Layout from './components/layout'

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
element={    <Layout/>}
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