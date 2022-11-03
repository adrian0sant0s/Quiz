import React from "react";

import {
  Container,
  ContainerMessage,
  Button,
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
          <Button to="/init">Começar</Button>;
        </ContainerMessage>
        <ImageTaça src={imageTaça} />
      </ContainerInfo>
    </Container>
  );
};

export default Welcome;
