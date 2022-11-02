import styled from "styled-components";

import estadio from "../../assets/copa.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${estadio});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  width: 60%;
  height: 400px;
  background-color: #131414;
  border-radius: 30px;
  padding: 30px;
`;

export const ScoreSection = styled.div``;

export const QuestionSection = styled.div``;

export const QuestionCount = styled.div`
  color: #ff4500;
  margin-bottom: 20px;
`;

export const QuestionText = styled.div`
  font-size: 1.2rem;
  text-align: center;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 50px;
`;

export const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  button {
    padding: 10px;
    width: 40%;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 8px;
  }

  button:hover {
    background-color: #ffd700;
    border: none;
  }

  button:active {
    opacity: 0.8;
  }
`;
