import React, { useState } from 'react'
import { useQuiz } from '../../context/quizContext'
import { Question } from '../../dataModel/Quiz.type'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import {
  btnStyleCorrectProps,
  btnStyleNotSelectedProps,
  btnStyleProps,
  btnStyleWrongProps,
  imageStyleProps,
  nextButtonStyleProps,
  questionTitleStyleProps
} from './question-style-props'
import {
  CALCULATE_SCORE,
  CHOOSE_OPTION,
  INCREMENT_QUESTION
} from '../../constants/quizContextConstants'

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

  const updateQuestionStatus = () => {
    if (currentQuestion !== quizSelected!.totalQuestions) {
      dispatch({ type: INCREMENT_QUESTION })
    } else {
      dispatch({ type: CALCULATE_SCORE })
      navigate('/scoreBoard')
    }
  }
  const updateOption = (optionId: string) => {
    dispatch({
      type: CHOOSE_OPTION,
      payload: {
        questionId: question._id,
        optionId
      }
    })
    setShowAnswer(true)
    setTimeout(() => updateQuestionStatus(), 1000)
  }

  return (
    <>
      <Image
        src={question.image}
        alt={question.question}
        {...imageStyleProps}
      />
      <Box py='1rem'>
        <Heading color='white'>Question {currentQuestion}</Heading>
        <Heading {...questionTitleStyleProps}>{question.question}</Heading>
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
        <Flex justify='flex-end'>
          <Button
            {...btnStyleProps}
            onClick={updateQuestionStatus}
            {...nextButtonStyleProps}
          >
            Skip Question
          </Button>
        </Flex>
      </Box>
    </>
  )
}
