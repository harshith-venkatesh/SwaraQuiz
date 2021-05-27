import { Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Quiz } from '../../dataModel/Quiz.type'
import { QuestionContainer } from '../QuestionContainer/QuestionContainer'
import {
  quizTitleStyleProps,
  simpleGridStyleProps
} from './quizContainer-style-props'

export type QuizContainerProps = { quiz: Quiz | null; currentQuestion: number }

export const QuizContainer = ({
  quiz,
  currentQuestion
}: QuizContainerProps) => {
  return (
    <>
      {quiz && (
        <>
          <Heading textAlign='center' {...quizTitleStyleProps}>
            {quiz.name} {currentQuestion} / {quiz.totalQuestions}
          </Heading>
          <SimpleGrid textAlign='center' {...simpleGridStyleProps}>
            <QuestionContainer
              key={quiz.questions[currentQuestion - 1]._id}
              question={quiz.questions[currentQuestion - 1]}
            />
          </SimpleGrid>
        </>
      )}
    </>
  )
}
