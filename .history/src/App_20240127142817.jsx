



import { useState } from 'react'

import Homepage from './components/homepage'

import './App.css'

import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";


function App() {


  return (
    <>
    <Routes>

<Route path='/'
element={<Homepage/>}
>
</Route>

    </Routes>

    </>
  )
}

export default App