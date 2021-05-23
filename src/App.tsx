import React from 'react'
import { Route, Routes } from 'react-router'
import { Footer, Header } from './components'
import { HomePage, QuizPage } from './pages'

function App() {
  return (
    <div>
      <Header />
      <div className='quiz__container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quiz/:quizId' element={<QuizPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
