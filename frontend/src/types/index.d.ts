interface Question {
  question_text: string;
  question_id: number;
}

interface Answer {
  answer_id: number;
  answer_text: string;
  question_id: Question;
}

interface TextProps {
  text: string;
  fontSize: number;
  color: string;
  fontFamily?: string;
  fontWeight?: string;
}

interface QuestionWizardProps {
  questions: Question[];
  answers: Answer[];
}

export { QuestionWizardProps, TextProps, Question, Answer };
