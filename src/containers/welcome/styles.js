import styled from "styled-components";

import Background from "../../assets/gramado.jpg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  background-color: #01260a;
  width: 60%;
  height: 400px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerMessage = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: #eee;
  }

  h2 {
    color: #eee;
  }

  button {
    background: none;
    color: #eee;
    border: 1px solid #eee;
    border-radius: 10px;
    cursor: pointer;
    width: 120px;
    padding: 10px;
  }

  button:active {
    opacity: 0.5;
  }
`;

export const ImageTaça = styled.img`
  height: 250px;
`;
