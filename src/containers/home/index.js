import React from "react";
import { useState } from "react";

import questions from "../../data/questions";
import {
  Container,
  ContainerInfo,
  ScoreSection,
  QuestionSection,
  QuestionCount,
  QuestionText,
  AnswerSection,
} from "./styles";

const Home = () => {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <Container>
      <ContainerInfo>
        {showScore ? (
          <ScoreSection>
            Voce pontuou {score} de {questions.length}
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
                <button key={index}>{option}</button>
              ))}
            </AnswerSection>
          </>
        )}
      </ContainerInfo>
    </Container>
  );
};

export default Home;
