import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { IStyled } from "../Movies";

interface IProps {
  chosse: string;
  number: number;
}

export default function SkeletonLoading({ chosse, number }: IProps) {
  return (
    <>
      {Array(number)
        .fill(0)
        .map((item, index) => (
          <Movies chosse={chosse} key={index}>
            <Wrap chosse={chosse}>
              <Skeleton style={{ height: "calc(100%" }} />
            </Wrap>
            {chosse === "list" && (
              <div>
                <h3>
                  <Skeleton width={150} />
                </h3>
                <small>
                  <Skeleton />
                </small>
              </div>
            )}
          </Movies>
        ))}
    </>
  );
}

const Wrap = styled.div<IStyled>`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  min-width: ${(props) => (props.chosse === "grid" ? "300px" : "89.5px")};
  min-height: ${(props) => (props.chosse === "grid" ? "450px" : "89.5px")};
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Movies = styled.div<IStyled>`
  display: flex;
  padding: 12px;
  border-radius: 24px;
  text-decoration: none;
  color: #fff;

  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  cursor: pointer;

  h3 {
    padding-top: 8px;
    padding: 0 24px;
  }
  small {
    opacity: 0.8;
    padding: 0 24px;
  }
`;

/* &:hover {
    background-color: ${(props) =>
      props.chosse === "grid" ? "none" : " #fff"};
    opacity: ${(props) => (props.chosse === "grid" ? "none" : " 0.6")};
    transition: ${(props) =>
      props.chosse === "grid"
        ? "none"
        : " all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"};

    h3,
    small {
      color: ${(props) => (props.chosse === "grid" ? "none" : " #000")};
    }
  } */
