import React from 'react'
import React, { BrowserRouter, Route, Routes } from 'react-router-dom'
import Looklike from './looklike'

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/looklike' element={<Looklike/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
