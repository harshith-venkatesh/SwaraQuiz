import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { QuizContainer } from '../components/QuizContainer/QuizContainer'
import { QuizInstructions } from '../components/QuizInstruction/QuizInstructions'
import { useQuiz } from '../context/quizContext'
import { INITIALIZE_QUIZ, RESET_QUIZ } from '../context/quizContext.type'
import { quizDB } from '../database/quizdb'
import { Quiz } from '../dataModel/Quiz.type'

export const QuizPage = () => {
  const {
    state: { currentQuestion },
    dispatch
  } = useQuiz()

  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const { quizId } = useParams()
  const [showInstruction, setShowInstruction] = useState(false)

  React.useEffect(() => {
    dispatch({ type: RESET_QUIZ })
    const quizDetails = quizDB.quizzes.find((quiz) => quiz._id === quizId)
    if (quizDetails) {
      dispatch({ type: INITIALIZE_QUIZ, payload: { quiz: quizDetails } })
      setQuiz(quizDetails)
    }
  }, [dispatch, quizId])

  return (
    <>
      {quiz === null && <Box>Loading</Box>}
      {quiz && !showInstruction ? (
        <QuizInstructions quiz={quiz} setShowInstruction={setShowInstruction} />
      ) : (
        <QuizContainer quiz={quiz} currentQuestion={currentQuestion} />
      )}
    </>
  )
}
