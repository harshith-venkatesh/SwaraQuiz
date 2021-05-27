import { Box, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Quiz } from '../../dataModel/Quiz.type'
import {
  cardTitleStyleProps,
  cardStyleProps,
  cardDetailsStyleProps,
  imageStyleProps,
  btnStyleProps
} from './category-card-style-props'

export const CategoryCard = ({ quiz }: { quiz: Quiz }) => {
  return (
    <>
      <Link to={`/quiz/${quiz._id}`}>
        <Box {...cardStyleProps}>
          <Image src={quiz.image} alt={quiz.name} {...imageStyleProps} />
          <Box {...cardDetailsStyleProps}>
            <Box>
              <Box textAlign='left' {...cardTitleStyleProps}>
                {quiz.name}
              </Box>
            </Box>
            <Button textAlign='right' {...btnStyleProps}>
              Play Now
            </Button>
          </Box>
        </Box>
      </Link>
    </>
  )
}
