export const btnStyleProps = {
  px:'1.5rem',
  borderRadius: 'full',
  py:'1rem',
  height:'auto',
  fontWeight:'bold',
  boxShadow:'0 0 0 1px black',
  _disabled:{
    opacity:1
  }
}

export const btnStyleNotSelectedProps = {
  color: 'gray.700',
  bg:'white',
  border: '0.3rem solid gray.300',
  opacity:'1'
}

export const btnStyleCorrectProps = {
  color: 'gray.700',
  bg:'green.300',
  border: '0.3rem solid green.300',
  _active:{
    color: 'gray.700',
    bg:'green.300',
    border: '0.3rem solid green.300',
  },
  _hover:{
    color: 'gray.700',
    bg:'green.300',
    border: '0.3rem solid green.300',
  }
  
}

export const btnStyleWrongProps = {
  color: 'gray.700',
  bg:'red.300',
  border: '0.3rem solid red.300',
  _hover:{
    color: 'gray.700',
    bg:'red.300',
    border: '0.3rem solid red.300',
  }
}

export const nextButtonStyleProps = {
  mt:'1.5rem',
  color:'gray.300' ,
  bg:'blue.400',
  _hover:{
    bg: 'blue.700'
  },
  _active:{
    bg:'blue.700',
    transform:'scale(1.1)',
    borderColor:'blue.700'
  }
}