import React from "react";
import styled from "styled-components";
import { MdOutlineGridView, MdFormatListBulleted } from "react-icons/md";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { IStyled } from "../Movies";

interface IProps {
  chosse?: string;
  setChosse: React.Dispatch<React.SetStateAction<string>>;
  show?: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ chosse, setChosse, show, setShow }: IProps) {
  return (
    <Nav>
      <LeftNav>
        <Logo src="/images/logo.svg" alt="" />
        <NavMenu>
          <a>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>Now Playing</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" alt="" />
            <span>Top Rated</span>
          </a>
        </NavMenu>
      </LeftNav>

      <RightNav chosse={chosse}>
        <div onClick={() => setChosse("grid")}>
          <MdOutlineGridView />
        </div>
        <div onClick={() => setChosse("list")}>
          <MdFormatListBulleted />
        </div>
        <div onClick={() => setShow(!show)}>
          <AiOutlineSearch />
        </div>
        <div>
          <AiOutlineMenu />
        </div>
      </RightNav>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1.42px;
`;

const LeftNav = styled.nav`
  display: flex;
  align-items: center;
`;

const RightNav = styled.nav<IStyled>`
  font-size: 23px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  cursor: pointer;

  div {
    &:first-child {
      color: ${(props) => (props.chosse === "grid" ? "red" : "white")};
      &:hover {
        color: red;
        transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
  }

  div {
    &:nth-child(2) {
      color: ${(props) => (props.chosse === "list" ? "red" : "white")};
      &:hover {
        color: red;
        transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    div {
      &:last-child {
        display: none;
      }
    }
  }
`;

const Radio = styled.input`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 600px) {
   display: none ;
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  cursor: pointer;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
