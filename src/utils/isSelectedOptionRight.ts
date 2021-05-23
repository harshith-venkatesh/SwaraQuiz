import { Option } from '../dataModel/Quiz.type'

export const isSelectedOptionRight = (option: Option[]): boolean => {
  return !!option.find(({isSelected, isAnswer}) => isSelected && isAnswer)
}

export const styleSelectedOptionRight = (option:Option[]):string => {
  if(isSelectedOptionRight(option)){
    return `bg: 'green.900'` 
  } else {
    return `bg:'red.900'`
  }
}