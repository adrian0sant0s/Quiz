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
  border-radius: 20px;
  padding: 30px;
`;

export const ScoreSection = styled.div``;

export const QuestionSection = styled.div``;

export const QuestionCount = styled.div`
  color: #fff;
`;

export const QuestionText = styled.div``;

export const AnswerSection = styled.div``;
