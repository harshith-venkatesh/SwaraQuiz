export type Option = {
  _id: string;
  text: string;
  isAnswer: boolean;
  isSelected?: boolean;
}

export type Question = {
  _id: string;
  question: string;
  image: string;
  points: number;
  negetivePoints?: number;
  options: Option[]
}

export type UserScore = {
  _id: string;
  userId: string;
  username: string;
  score: number;
}
export type Quiz = {
  _id: string;
  userId?:string;
  username: string;
  score: number;
  name: string;
  image: string;
  totalQuestions: number;
  questions: Question[];
  type?: string;
  level?: string;
  highScore: UserScore[];
}

export type CategoryOfQuiz = {
  _id: string;
  image: string;
  type: string;
  noOfQuiz: number;
  cardColor: string;
}