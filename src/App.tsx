import React from 'react'
import { Route, Routes } from 'react-router'
import { Footer, Header } from './components'
import { HomePage, QuizPage, UserBoard } from './pages'

function App() {
  return (
    <div>
      <Header />
      <div className='quiz__container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quiz/:quizId' element={<QuizPage />} />
          <Route path='/userBoard' element={<UserBoard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
