



import { useState } from 'react'

import Homepage from './components/homepage'

import './App.css'

import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";
import Infographic from './components/infographic/infographic';


function App() {


  return (
    <>
    <Routes>

<Route path='/'
element={<Homepage/>}
>

</Route>

<Route path='docs'
  element={<Infographic/>}
  >
</Route>

<Route path='overview'

    </Routes>

    </>
  )
}

export default App