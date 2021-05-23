import React, { useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useQuiz } from '../../context/quizContext'
import {
  CALCULATE_SCORE,
  CHOOSE_OPTION,
  INCREMENT_QUESTION
} from '../../context/quizContext.type'
import { Question } from '../../dataModel/Quiz.type'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import {
  btnStyleCorrectProps,
  btnStyleNotSelectedProps,
  btnStyleProps,
  btnStyleWrongProps,
  nextButtonStyleProps
} from './question-style-props'

export type QuestionContainerProps = {
  question: Question
}

export const QuestionContainer = ({ question }: QuestionContainerProps) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const navigate = useNavigate()
  const {
    state: { currentQuestion, quizSelected },
    dispatch
  } = useQuiz()

  const getQuestionStatus = () =>
    currentQuestion !== quizSelected!.totalQuestions ? 'Next' : 'Submit'
  const updateQuestionStatus = () => {
    if (currentQuestion !== quizSelected!.totalQuestions) {
      dispatch({ type: INCREMENT_QUESTION })
    } else {
      dispatch({ type: CALCULATE_SCORE })
      navigate('/userBoard')
    }
  }
  const updateOption = (optionId: string) => {
    console.log({ optionId })
    dispatch({
      type: CHOOSE_OPTION,
      payload: {
        questionId: question._id,
        optionId
      }
    })
    setShowAnswer(true)
  }

  return (
    <>
      <Image
        src={question.image}
        alt={question.question}
        height='auto'
        width='100%'
        borderRadius='1rem'
      />
      <Box py='1rem'>
        <Heading as='h4' size='sm'>
          Question {currentQuestion}
        </Heading>
        <Heading as='h3' size='md' mt='1rem'>
          {question.question}
        </Heading>
        <SimpleGrid columns={[1, 1]} gap='1rem' mt='2rem'>
          {question.options.map((option) => {
            const isAnswerCSSChanges = showAnswer
              ? option.isAnswer
                ? { ...btnStyleCorrectProps }
                : { ...btnStyleWrongProps }
              : { ...btnStyleNotSelectedProps }
            return (
              <Button
                {...btnStyleProps}
                disabled={showAnswer}
                key={option._id}
                {...isAnswerCSSChanges}
                onClick={() => updateOption(option._id)}
              >
                {option.text}
              </Button>
            )
          })}
        </SimpleGrid>
        <Button
          rightIcon={<ArrowForwardIcon />}
          {...btnStyleProps}
          onClick={updateQuestionStatus}
          {...nextButtonStyleProps}
        >
          {getQuestionStatus()}
        </Button>
      </Box>
    </>
  )
}
