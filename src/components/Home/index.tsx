import React, { useState } from "react";
import styled from "styled-components";
import { Movies } from "../../Interface/Movie";
import Movie from "../Movies";

export interface IProps {
  movies: Movies[];
}

export default function Home({ movies }: IProps) {
  
  return (
    <Container>
      <Movie movies={movies} />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
