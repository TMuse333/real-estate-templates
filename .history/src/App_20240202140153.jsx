



import { useState } from 'react'

import Homepage from './components/homepage'

import './App.css'

import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";
import Infographic from './components/infographic/infographic';
import Overview2 from './components/overview2/overview2';


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
element={<Overview2/>}

    </Routes>

    </>
  )
}

export default App