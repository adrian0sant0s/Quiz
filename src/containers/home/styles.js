import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const ScoreSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  p {
    /* align-self: stretch;
    text-align: center; */
    color: #131414;
    background-color: #fff;
    border-radius: 30px;
    font-size: 1.5rem;
    padding: 10px 50px;
  }
`;

export const Button = styled(Link)`
  font-size: 1rem;
  padding: 15px;
  border-radius: 50px;
  border: none;
  background-color: #ff4500;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

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
