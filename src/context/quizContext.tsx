import { createContext, useContext, useReducer } from 'react'
import { initialState, quizReducer } from '../reducer/quizReducer'
import { ContextType } from './quizContext.type'

const QuizContext = createContext<ContextType>({} as ContextType)

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => useContext(QuizContext)
