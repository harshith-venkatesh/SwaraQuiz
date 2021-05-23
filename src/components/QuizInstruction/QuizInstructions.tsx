import {
  Button,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import InfoIcon from '@chakra-ui/icon'
import React from 'react'
import { Quiz } from '../../dataModel/Quiz.type'

export type QuizInstructionsProps = {
  quiz: Quiz
  setShowInstruction: (flag: boolean) => void
}

export const containerStyleProps = {
  border: '1px',

  borderColor: 'blue.300',
  p: '0rem 1rem 2rem 1rem',
  my: '2rem'
}

export const QuizInstructions = ({
  quiz,
  setShowInstruction
}: QuizInstructionsProps) => {
  return (
    <>
      <Container textAlign='center' {...containerStyleProps}>
        <Heading mt='2rem' textAlign='center'>
          {quiz.name}
        </Heading>
        <List spacing={3} mt='2rem' textAlign='left'>
          <ListItem>
            <ListIcon as={InfoIcon} color='blue.300' />
            Each Right answer scores 10 points
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color='blue.300' />
            Each Question has 1 right answer
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color='blue.300' />
            There is no time limit
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color='blue.300' />
            To win the quiz, score 60% or more
          </ListItem>
        </List>
        <Button mt='2rem' onClick={() => setShowInstruction(true)}>
          Start Quiz
        </Button>
      </Container>
    </>
  )
}
