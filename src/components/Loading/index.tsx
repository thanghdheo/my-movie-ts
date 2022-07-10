import React from "react";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <BounceLoader color="#fff" />
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
