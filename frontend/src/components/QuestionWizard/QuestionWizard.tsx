import React from "react";
import { Button, theme } from "antd";
import TextComponent from "../Text/Text";
import { QuestionWizardProps } from "../../types";
import { calculatePersonalityType } from "../../api-service";
import { useNavigate } from "react-router-dom";

const QuestionWizard: React.FC<QuestionWizardProps> = ({
  answers,
  questions,
}) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(
    null
  );
  const [answersList, setAnswersList] = React.useState<any[]>([]);
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const updateSelectedAnswerForQuestion = (questionIndex: number) => {
    const selected = answersList.find(
      (ans) => ans.question_id === questions[questionIndex]?.question_id
    );
    setSelectedAnswer(selected ? selected.answer_id : null);
  };

  const next = () => {
    setCurrentQuestion((prev) => {
      const newIndex = prev + 1;
      updateSelectedAnswerForQuestion(newIndex);
      return newIndex;
    });
  };

  const prev = () => {
    setCurrentQuestion((prev) => {
      const newIndex = prev - 1;
      updateSelectedAnswerForQuestion(newIndex);
      return newIndex;
    });
  };

  const onAnswerClick = (question_id: number, answer_id: number) => {
    // allow only one answer per question
    setAnswersList((prevAnswers) => {
      const filteredAnswers = prevAnswers.filter(
        (answer) => answer.question_id !== question_id
      );
      return [...filteredAnswers, { question_id, answer_id }];
    });
    setSelectedAnswer(answer_id);
  };

  // disable next button if user has not selected an answer for the current question
  const disableNext = answersList.some(
    (answer) => answer.question_id === questions[currentQuestion].question_id
  );

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`,
    padding: "0 16px",
    marginTop: 16,
  };

  const answersStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  };

  const answerItemStyle: React.CSSProperties = {
    padding: "0.8125rem 1rem",
    borderRadius: 8,
    border: `1px solid ${token.colorBorder}`,
    cursor: "pointer",
  };

  const answerIDtoAlpha = ["A", "B", "C", "D"];

  const onSubmit = async () => {
    try {
      const response = await calculatePersonalityType(answersList);
      // navigate to results page
      console.log(response);
      navigate(`/results/${response}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(answersList);

  return (
    <div style={contentStyle}>
      <TextComponent
        text={`Question ${currentQuestion + 1}/${questions.length}`}
        fontSize={14}
        color="#fff"
      />
      <div style={{ marginBottom: 25 }}>
        <TextComponent
          text={questions[currentQuestion]?.question_text}
          fontSize={24}
          fontWeight="bold"
          color="#fff"
        />
      </div>
      <div style={answersStyle}>
        {answers
          .filter(
            (answer) =>
              answer.question_id.question_id ===
              questions[currentQuestion]?.question_id
          )
          .map((answer, index) => {
            const isSelected = answer.answer_id === selectedAnswer;
            return (
              <div
                key={index}
                style={{
                  ...answerItemStyle,
                  border: `1px solid ${isSelected ? "lightgreen" : "#fff"}`,
                }}
                onClick={() =>
                  onAnswerClick(
                    questions[currentQuestion].question_id,
                    answer.answer_id
                  )
                }
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div
                    style={{
                      borderRadius: 2,
                      display: "flex",
                      width: "1.5rem",
                      height: "1.5rem",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isSelected ? "green" : "transparent",
                      border: `1px solid ${isSelected ? "lightgreen" : "#fff"}`,
                    }}
                  >
                    <TextComponent
                      text={answerIDtoAlpha[index]}
                      fontSize={14}
                      color="#fff"
                    />
                  </div>
                  <TextComponent
                    text={answer.answer_text}
                    fontSize={16}
                    color="#fff"
                  />
                </div>
              </div>
            );
          })}
      </div>

      <div
        style={{
          gap: 5,
          display: "flex",
          padding: 10,
          justifyContent: "center",
        }}
      >
        {currentQuestion !== 0 ? <Button onClick={prev}>Prev</Button> : null}
        {questions.length === currentQuestion + 1 ? (
          <Button disabled={!disableNext} onClick={onSubmit}>Submit</Button>
        ) : (
          <Button onClick={next} disabled={!disableNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionWizard;
