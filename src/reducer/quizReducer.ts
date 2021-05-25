
import { CALCULATE_SCORE, CHOOSE_OPTION, INCREMENT_QUESTION, INITIALIZE_QUIZ, RESET_QUIZ } from '../constants/quizContextConstants'
import { ActionType, InitialStateType } from '../context/quizContext.type'
import { isSelectedOptionRight } from '../utils/isSelectedOptionRight'

export const initialState: InitialStateType = {
  quizSelected: null,
  currentQuestion: 1,
  questionsAttempted: 0
}

export const quizReducer = (
  state: InitialStateType,
  action: ActionType
): InitialStateType => {

  switch (action.type) {
    case INITIALIZE_QUIZ:
      return {
        ...state,
        quizSelected: {
          ...action.payload.quiz,
          score: 0
        }
      }
    case INCREMENT_QUESTION: {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }
    }
    case CALCULATE_SCORE:
      if (state.quizSelected) {
        const scoreTotal = state.quizSelected.questions.reduce(
          (totalScore: number, { negetivePoints, points, options }): number =>
            isSelectedOptionRight(options)
              ? totalScore + points
              : negetivePoints
              ? totalScore - negetivePoints
              : totalScore,
          0
        )

        return {
          ...state,
          quizSelected: {
            ...state.quizSelected,
            score: scoreTotal
          }
        }
      } else {
        throw new Error('No Quiz Selected')
      }
    case CHOOSE_OPTION:
      if (state.quizSelected) {
        const answeredQuestions = state.quizSelected.questions.map((question) =>
          question._id === action.payload.questionId
            ? {
                ...question,
                options: question.options.map((option) =>
                  option._id === action.payload.optionId
                    ? { ...option, isSelected: true }
                    : { ...option, isSelected: false }
                )
              }
            : question
        )
        const questionsAttemptedCheck = state.quizSelected.questions.some(
          (question) => question._id === action.payload.questionId
        )

        return {
          ...state,
          quizSelected: {
            ...state.quizSelected,
            questions: answeredQuestions
          },
          questionsAttempted: questionsAttemptedCheck
            ? state.questionsAttempted + 1
            : state.questionsAttempted
        }
      } else {
        throw new Error('No Quiz Selected')
      }
      case RESET_QUIZ:
        return {
          ...initialState
        }
    default:
      return state
  }
}
