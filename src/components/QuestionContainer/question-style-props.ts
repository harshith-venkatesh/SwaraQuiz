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
  color: 'white',
  bg:'green.300',
  border: '0.3rem solid green.300',
  _active:{
    color: 'white',
    bg:'green.300',
    border: '0.3rem solid green.300',
  },
  _hover:{
    color: 'white',
    bg:'green.300',
    border: '0.3rem solid green.300',
  }
}
export const imageStyleProps = {
        height:'30rem',
        width:'100%',
        borderRadius:'1rem',
        color: 'white'
}

export const questionTitleStyleProps = {
  size:'md' ,
  mt:'1rem',
  color: 'white'
}

export const btnStyleWrongProps = {
  color: 'white',
  bg:'red.300',
  border: '0.3rem solid red.300',
  _hover:{
    color: 'white',
    bg:'red.300',
    border: '0.3rem solid red.300',
  }
}

export const nextButtonStyleProps = {
  mt:'1.5rem',
  color:'white' ,
  bg:'#5f854f',
  _hover:{
    bg: 'blue.700'
  },
  _active:{
    bg:'blue.700',
    transform:'scale(1.1)',
    borderColor:'blue.700'
  }
}