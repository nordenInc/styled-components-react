import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color="green">Console</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console color="green" direction="column" />
        <Button outlined color="green" align="flex-end">
          Send
        </Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
