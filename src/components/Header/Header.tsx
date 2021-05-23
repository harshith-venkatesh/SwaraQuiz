import { Box, Flex, Avatar, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export const Header = () => {
  return (
    <>
      <Box position='sticky' top='0' zIndex={1}>
        <Flex
          bg='white'
          color='blue.400'
          minH={'4rem'}
          py={{ base: 2 }}
          px={{ base: '1.5rem' }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor='gray.300'
          align={'center'}
          justifyContent='space-between'
        >
          <Flex>
            <Link to='/' className='nav__link'>
              <span className='logo__title'>Swara Quiz</span>
            </Link>
            <Flex alignItems='center' ml={10}>
              <Link to='/'>
                <Box
                  as='span'
                  p={2}
                  fontSize={'1rem'}
                  fontWeight={400}
                  color='gray.800'
                  _hover={{ textDecoration: 'none', color: 'blue.800' }}
                >
                  Home
                </Box>
              </Link>
            </Flex>
          </Flex>
          <Button href={'#'} _hover={{ bg: 'gray.50' }} p={0}>
            <Avatar
              size='sm'
              bg={'gray.700'}
              _hover={{ bg: 'gray.900' }}
              src='https://bit.ly/broken-link'
            />
          </Button>
        </Flex>
      </Box>
    </>
  )
}
