import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ContainerMessage,
  ContainerInfo,
  ImageTaça,
} from "./styles";
import imageTaça from "../../assets/taça.png";

const Welcome = () => {
  return (
    <Container>
      <ContainerInfo>
        <ContainerMessage>
          <h1>Quiz da copa do mundo</h1>
          <h2>Seja muito bem vindo!</h2>
          <Link to="/init">Começar</Link>;
        </ContainerMessage>
        <ImageTaça src={imageTaça} />
      </ContainerInfo>
    </Container>
  );
};

export default Welcome;
