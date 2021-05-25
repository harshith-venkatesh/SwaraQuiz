import React from 'react'
import { Route, Routes } from 'react-router'
import { Header } from './components'
import { HomePage, QuizPage, UserBoard } from './pages'

function App() {
  return (
    <>
      <Header />
      <div className='quiz__container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quiz/:quizId' element={<QuizPage />} />
          <Route path='/scoreBoard' element={<UserBoard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
