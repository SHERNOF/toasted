import './main.scss'
import React from 'react'
import MainContent from '../main-content/MainContent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateNew from '../createNew/CreateNew'

export default function Main() {
    return (
      <BrowserRouter>
        <main className='main'>
          <Routes>
            <Route path='/' element={<MainContent></MainContent>}></Route>
              <Route path='/create-new' element={<CreateNew></CreateNew>}></Route>
            </Routes>
        </main>
      </BrowserRouter>
    )
}
