import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { imageStyleProps } from './gameQuestionBoard-style-props'
import { GameQuestionBoardProps } from './GameQuestionBoard.type'

export const GameQuestionBoard = ({
  question,
  questionNumber
}: GameQuestionBoardProps) => {
  return (
    <>
      <Image
        src={question.image}
        alt={question.question}
        {...imageStyleProps}
      />
      <Box p='1rem'>
        <Heading>Question {questionNumber + 1}</Heading>
        <Heading size='md' mt='1rem'>
          {question.question}
        </Heading>
        <SimpleGrid columns={[1, 1]} gap='1rem' mt='2rem'>
          {question.options.map((option) => {
            const bgColor = option.isAnswer
              ? 'green.300'
              : option.isSelected
              ? 'red.300'
              : 'gray.300'
            const optionCardStyleProps = {
              boxShadow: 'md',
              bg: bgColor,
              color: 'gray.800',
              fontWeight: 'bold',
              p: '1rem'
            }
            return (
              <Box {...optionCardStyleProps} key={option._id}>
                {option.isSelected && option.isAnswer && (
                  <CheckIcon bg='none' mr='2' />
                )}
                {option.isSelected && !option.isAnswer && (
                  <CloseIcon bg='none' mr='2' />
                )}
                {option.text}
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>
    </>
  )
}
