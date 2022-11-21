import React from "react";
import { useState } from "react";

import questions from "../../data/questions";
import {
  Container,
  ContainerInfo,
  ScoreSection,
  Button,
  QuestionSection,
  QuestionCount,
  QuestionText,
  AnswerSection,
  ScoreAlert,
} from "./styles";

const Home = () => {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleOptionCorrect(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <Container>
      <ContainerInfo>
        {showScore ? (
          <ScoreSection>
            <p>
              Voce pontuou {score} de {questions.length}
            </p>
            <ScoreAlert>
              {score <= 3 ? "Voce pode melhorar, tente novamente" : "Parabéns"}
            </ScoreAlert>
            <Button to="/">Refazer teste</Button>
          </ScoreSection>
        ) : (
          <>
            <QuestionSection>
              <QuestionCount>
                <span>Questão {currentQuestion + 1}</span>/{questions.length}
              </QuestionCount>
              <QuestionText>{questions[currentQuestion].question}</QuestionText>
            </QuestionSection>

            <AnswerSection>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  onClick={() => handleOptionCorrect(option.isCorrect)}
                  key={index}
                >
                  {option.answer}
                </button>
              ))}
            </AnswerSection>
          </>
        )}
      </ContainerInfo>
    </Container>
  );
};

export default Home;
