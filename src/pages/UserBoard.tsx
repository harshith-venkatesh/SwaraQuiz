import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useQuiz } from '../context/quizContext'
import { useNavigate } from 'react-router-dom'
import { Question } from '../dataModel/Quiz.type'
import { AnswerContainer } from '../components/AnswerContainer/AnswerContainer'
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
    px: '1.5rem'
  }
  return (
    <>
      {quizSelected && (
        <>
          <Heading
            as='h1'
            textAlign='center'
            {...textSizeStyleProps}
            fontSize='x-large'
          >
            Quiz Result
          </Heading>
          <Text textAlign='center' fontSize='large' {...textSizeStyleProps}>
            You have attempted {questionsAttempted} /{' '}
            {quizSelected?.totalQuestions} questions
          </Text>
          <Text textAlign='center' {...textSizeStyleProps} fontSize='large'>
            {quizSelected!.score >= 70
              ? `Yayy! Congeratulations you have won!`
              : `Better Luck Next Time`}
          </Text>
          <Text textAlign='center' fontSize='xx-large' {...textSizeStyleProps}>
            Your Score
          </Text>
          <Text
            textAlign='center'
            fontSize='xx-large'
            {...textSizeStyleProps}
            color={quizSelected!.score >= 20 ? 'green.700' : 'red.700'}
          >
            {quizSelected.score}
          </Text>
          <Heading textAlign='center' {...textSizeStyleProps} mt='2rem'>
            Review Questions
          </Heading>
          <SimpleGrid textAlign='center' {...gridStyleProps}>
            {quizSelected.questions.map(
              (question: Question, index: number): JSX.Element => (
                <AnswerContainer
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
