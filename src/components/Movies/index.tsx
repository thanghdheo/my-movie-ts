import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import { IProps } from "../Home";
import { AiOutlineClose } from "react-icons/ai";
import { Movies as moVies, RootState } from "../../Interface/Movie";
import SkeletonLoading from "../Loading/SkeletonLoading";
import { useSelector } from "react-redux";
const Fade = require("react-reveal/Zoom");
export interface IStyled {
  chosse?: string;
  show?: boolean;
}

export default function Movie({ movies }: IProps) {
  const [chosse, setChosse] = useState<string>("grid");
  const [show, setShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [searchs, setSearchs] = useState<moVies[]>([]);
  const [notFound, setNotFound] = useState<boolean>(true);

  const loading = useSelector((state: RootState) => state.moviesReducer.status);

  useEffect(() => {
    if (input !== "") {
      const res = movies.filter((item) =>
        item?.title?.toLowerCase().trim().includes(input.toLowerCase().trim())
      );
      setSearchs(res);
      setNotFound(res.length === 0 ? false : true);
    } else {
      setSearchs([]);
      setNotFound(true);
    }
  }, [input]);
  return (
    <Container>
      <Header
        chosse={chosse}
        setChosse={setChosse}
        show={show}
        setShow={setShow}
      />
      <Content chosse={chosse}>
       {loading && <SkeletonLoading chosse={chosse} number={12} />}
        {movies &&
          movies.map((movie) => (
            <Link to={`/detail/${movie.id}`}>
              <Movies chosse={chosse}>
                <Wrap key={movie.id} chosse={chosse}>
                  <Link to={`/detail/${movie.id}`}>
                    <Fade big>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.poster_path}
                      />
                    </Fade>
                  </Link>
                </Wrap>
                {chosse === "list" && (
                  <div>
                    <h3>{movie.title}</h3>
                    <small>{movie.release_date}</small>
                  </div>
                )}
              </Movies>
            </Link>
          ))}
      </Content>
      <SearchWrap show={show}>
        <SearchBox>
          <div>
            <Input
              placeholder="Enter input ..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <AiOutlineClose onClick={() => setShow(!show)} />
        </SearchBox>
        <SearchInfo>
          {searchs.map((item, value) => (
            <Link to={`/detail/${item.id}`}>
              <Search>
                <SearchImg
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <SearchName>{item.title}</SearchName>
              </Search>
            </Link>
          ))}
          {!notFound && <SearchName>Không có kết quả</SearchName>}
        </SearchInfo>
      </SearchWrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  position: relative;
`;

const Content = styled.div<IStyled>`
  grid-gap: ${(props) => (props.chosse === "grid" ? "25px" : "none")};
  grid-template-columns: ${(props) =>
    props.chosse === "grid" ? "repeat(4, minmax(0, 1fr))" : "none"};
  display: ${(props) => (props.chosse === "grid" ? "grid" : "list")};
  flex-direction: ${(props) => (props.chosse === "grid" ? "none" : "column")};

  /* grid-gap: "25px";
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid; */

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div<IStyled>`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  min-width: ${props => props.chosse === 'grid' ? '300px' : 'none'};
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: ${(props) => (props.chosse === "grid" ? "100%" : "80px")};
    height: ${(props) => (props.chosse === "grid" ? "100%" : "80px")};
    object-fit: cover;
  }

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

  &:hover {
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
  }
  h3 {
    padding-top: 8px;
    padding: 0 24px;
  }
  small {
    opacity: 0.8;
    padding: 0 24px;
  }
`;

const SearchWrap = styled.div<IStyled>`
  cursor: pointer;
  padding: 32px;
  position: fixed;
  width: 30vw;
  top: 0px;
  bottom: 0;
  right: 0px;
  background-color: #040714;
  font-weight: 1000;
  font-size: 18px;
  color: #fff;
  z-index: 100;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  border: none;
  width: 300px;
  outline: none;
  background-color: #040710;
  border: 1px solid #fff;
  padding: 12px 24px;
  border-radius: 12px;
  color: #fff;
`;

const SearchInfo = styled.div`
  padding-top: 12px;
`;

const Search = styled.div`
  padding: 12px;
  display: flex;
  border-radius: 24px;
  text-decoration: none;
  color: #fff;

  &:hover {
    background-color: #fff;
    opacity: 0.6;
    transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    h4 {
      color: #000;
    }
  }
`;

const SearchImg = styled.img`
  height: 100px;
  width: 70px;
`;

const SearchName = styled.h4`
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0 12px;
`;
