import React from "react";
import styled from "styled-components";
export const HeadMainContainer = styled.div`
  width: 100%;
  height: 100px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NavTitle = styled.h1`
  color: #d3a121;
  font-weight: 400;
  font-size: 18px;
`;
export const Titlediv = styled.div`
  width: 50%;
  height: 95px;
  display: flex;
  align-items: center;
`;
export const NavMenu = styled.div`
  color: #fff;
  font-weight: 400;
`;
export const MenuLink = styled.a`
  &:hover {
    color: #faf4e4;
    font-size: 22px;
    transition: 0.4s all ease-in-out;
  }
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
`;
export const Nav = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
`;
export const Styles = () => {
  return <div>Styles</div>;
};
