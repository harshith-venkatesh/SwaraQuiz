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
import {
  containerStyleProps,
  listItemsStyleProps,
  quizInstructionStyleProps
} from './quizInstructions-style-props'

export type QuizInstructionsProps = {
  quiz: Quiz
  setShowInstruction: (flag: boolean) => void
}

export const QuizInstructions = ({
  quiz,
  setShowInstruction
}: QuizInstructionsProps) => {
  return (
    <>
      <Container textAlign='center' {...containerStyleProps}>
        <Heading textAlign='center' {...quizInstructionStyleProps}>
          {quiz.name}
        </Heading>
        <List spacing={3} mt='2rem' textAlign='left'>
          <ListItem {...listItemsStyleProps}>
            <ListIcon as={InfoIcon} color='white' />
            Each Right answer scores 10 points
          </ListItem>
          <ListItem {...listItemsStyleProps}>
            <ListIcon as={InfoIcon} color='white' />
            Each Question has 1 right answer
          </ListItem>
          <ListItem {...listItemsStyleProps}>
            <ListIcon as={InfoIcon} color='white' />
            There is no time limit
          </ListItem>
          <ListItem {...listItemsStyleProps}>
            <ListIcon as={InfoIcon} color='white' />
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
