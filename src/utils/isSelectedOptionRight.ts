import { Option } from '../dataModel/Quiz.type'

export const isSelectedOptionRight = (option: Option[]): boolean => {
  return !!option.find(({isSelected, isAnswer}) => isSelected && isAnswer)
}