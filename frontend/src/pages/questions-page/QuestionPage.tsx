import React from "react";
import { getAllAnswers, getAllQuestions } from "../../api-service";
import QuestionWizard from "../../components/QuestionWizard/QuestionWizard";
import { Answer, Question } from "../../types";



const QuestionPage = () => {
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [answers, setAnswers] = React.useState<Answer[]>([]);
  

  const getQuestions = async () => {
    const response = await getAllQuestions();
    setQuestions(response);
  };

  const getAnswers = async () => {
    const response = await getAllAnswers();
    setAnswers(response);
  };

 

  React.useEffect(() => {
    getQuestions();
    getAnswers();
  }, []);

 

  return (
    <div style={{ padding: "0 16px" }}>
      <QuestionWizard questions={questions} answers={answers} />
    </div>
  );
};

export default QuestionPage;
