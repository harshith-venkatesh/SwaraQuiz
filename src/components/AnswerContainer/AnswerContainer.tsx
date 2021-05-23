import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Question } from '../../dataModel/Quiz.type'

export type AnswerContainerProps = {
  question: Question
  questionNumber: number
}

export const AnswerContainer = ({
  question,
  questionNumber
}: AnswerContainerProps) => {
  return (
    <>
      <Image
        src={question.image}
        alt={question.question}
        height='30rem'
        width='100%'
        borderRadius='1rem'
      />
      <Box py='1rem'>
        <Heading as='h4' size='sm'>
          Question {questionNumber + 1}
        </Heading>
        <Heading as='h3' size='md' mt='1rem'>
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
                {option.isSelected && option.isAnswer && <CheckIcon mr='2' />}
                {option.isSelected && !option.isAnswer && <CloseIcon mr='2' />}
                {option.text}
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>
    </>
  )
}
