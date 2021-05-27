import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { headerStyleProps, logoTitleProps } from './Header-style-props'
export const Header = () => {
  return (
    <>
      <Box position='sticky' top='0' zIndex={1}>
        <Flex {...headerStyleProps}>
          <Flex>
            <Link to='/'>
              <Heading {...logoTitleProps}>Swara Quiz</Heading>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
