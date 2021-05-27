import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QuizProvider } from './context/quizContext'
import ScrollToTop from './utils/ScrollToTop'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <QuizProvider>
          <ScrollToTop />
          <App />
        </QuizProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
