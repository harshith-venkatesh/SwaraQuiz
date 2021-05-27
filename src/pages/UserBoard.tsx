import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useQuiz } from '../context/quizContext'
import { useNavigate } from 'react-router-dom'
import { Question } from '../dataModel/Quiz.type'
import { GameQuestionBoard } from '../components'
import {
  scoreBoardSubtitleStyleProps,
  scoreBoardTitleStyleProps,
  userBoardSimpleGridStyleProps
} from '../components/GameQuestionBoard/gameQuestionBoard-style-props'
export const UserBoard = () => {
  const navigate = useNavigate()
  const {
    state: { questionsAttempted, quizSelected }
  } = useQuiz()

  useEffect(() => {
    if (!quizSelected) {
      navigate('/')
    }
  }, [quizSelected, navigate])

  const gridStyleProps = {
    columns: [1, 2, 2],
    gap: '1.5rem',
    px: '1.5rem',
    mt: '2rem'
  }

  const textSizeStyleProps = {
    fontWeight: '500',
    mt: '1rem',
    px: '1.5rem',
    fontSize: 'x-large',
    color: 'white'
  }
  return (
    <>
      {quizSelected && (
        <>
          <Heading textAlign='center' {...textSizeStyleProps}>
            Quiz Result
          </Heading>

          <SimpleGrid {...userBoardSimpleGridStyleProps}>
            <Box>
              <Text textAlign='center' {...scoreBoardTitleStyleProps}>
                Total Score
              </Text>
              <Text textAlign='center' {...scoreBoardSubtitleStyleProps}>
                {quizSelected.totalQuestions * 10}
              </Text>
            </Box>
            <Box>
              <Text textAlign='center' {...scoreBoardTitleStyleProps}>
                Final Score
              </Text>
              <Text textAlign='center' {...scoreBoardSubtitleStyleProps}>
                {quizSelected.score}
              </Text>
            </Box>
            <Box>
              <Text textAlign='center' {...scoreBoardTitleStyleProps}>
                Total Questions
              </Text>
              <Text textAlign='center' {...scoreBoardSubtitleStyleProps}>
                {quizSelected.totalQuestions}
              </Text>
            </Box>
            <Box>
              <Text textAlign='center' {...scoreBoardTitleStyleProps}>
                Questions Attempted
              </Text>
              <Text textAlign='center' {...scoreBoardSubtitleStyleProps}>
                {' '}
                {questionsAttempted}
              </Text>
            </Box>
          </SimpleGrid>
          <Heading textAlign='center' {...textSizeStyleProps} mt='2rem'>
            Review Questions
          </Heading>
          <SimpleGrid textAlign='center' {...gridStyleProps}>
            {quizSelected.questions.map(
              (question: Question, index: number): JSX.Element => (
                <GameQuestionBoard
                  key={question._id}
                  question={question}
                  questionNumber={index}
                />
              )
            )}
          </SimpleGrid>
        </>
      )}
    </>
  )
}
