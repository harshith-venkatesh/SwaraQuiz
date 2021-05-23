import { Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Quiz } from '../../dataModel/Quiz.type'
import { QuestionContainer } from '../QuestionContainer/QuestionContainer'

export type QuizContainerProps = { quiz: Quiz | null; currentQuestion: number }

export const simpleGridProps = {
  columns: [1, 2, 2],
  gap: '1.5rem',
  px: '1.5rem',
  my: '2rem'
}
export const QuizContainer = ({
  quiz,
  currentQuestion
}: QuizContainerProps) => {
  return (
    <>
      {quiz && (
        <>
          <Heading mt='2rem' px='1rem' textAlign='center'>
            {quiz.name}
          </Heading>
          <SimpleGrid textAlign='center' {...simpleGridProps}>
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
