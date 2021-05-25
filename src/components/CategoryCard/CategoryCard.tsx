import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Quiz } from '../../dataModel/Quiz.type'
import {
  cardTitleStyleProps,
  cardWrapperStyleProps,
  cardDetailsStyleProps,
  imageStyleProps
} from './category-card-style-props'

export const CategoryCard = ({ quiz }: { quiz: Quiz }) => {
  return (
    <>
      <Link to={`/quiz/${quiz._id}`}>
        <Box {...cardWrapperStyleProps}>
          <Image src={quiz.image} alt={quiz.name} {...imageStyleProps} />
          <Box {...cardDetailsStyleProps}>
            <Box>
              <Box textAlign='left' {...cardTitleStyleProps}>
                {quiz.name}
              </Box>
            </Box>
            <Box textAlign='right' my='1rem'>
              <Button>Play Now</Button>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  )
}
