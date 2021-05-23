import { Heading, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { CategoryCard } from '../components'
import { quizDB } from '../database/quizdb'
import { Quiz } from '../dataModel/Quiz.type'

export const HomePage = () => {
  return (
    <>
      <Heading pt='2rem' pb='3rem' px='1.5rem' textAlign='center' id='expplore'>
        Featured Quizzes
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap='2rem' maxW='67rem' margin='auto'>
        {quizDB.quizzes.map(
          (quiz: Quiz): JSX.Element => (
            <CategoryCard key={quiz._id} quiz={quiz} />
          )
        )}
      </SimpleGrid>
    </>
  )
}
