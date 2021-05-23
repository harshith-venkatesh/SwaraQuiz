import { Quiz } from '../dataModel/Quiz.type'

export const INITIALIZE_QUIZ = 'INITIALIZE_QUIZ';
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const CALCULATE_SCORE = 'CALCULATE_SCORE';
export const CHOOSE_OPTION = 'CHOOSE_OPTION';
export const RESET_QUIZ = 'RESET_QUIZ';

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