import { CALCULATE_SCORE, CHOOSE_OPTION, INCREMENT_QUESTION, INITIALIZE_QUIZ, RESET_QUIZ } from '../constants/quizContextConstants'
import { Quiz } from '../dataModel/Quiz.type'

export type InitialStateType = {
  quizSelected: Quiz | null;
  currentQuestion: number;
  questionsAttempted: number;
}

export type ActionType = 
  {
    type: typeof INITIALIZE_QUIZ;
    payload: {quiz: Quiz }
  } | {
    type: typeof INCREMENT_QUESTION
  } | {
    type: typeof CALCULATE_SCORE
  } | {
    type: typeof CHOOSE_OPTION,
    payload: {
      questionId: string;
      optionId: string;
    }
  } | {
    type: typeof RESET_QUIZ
  }


export type ContextType = {
  state: InitialStateType;
  dispatch:(action:ActionType) => void
}