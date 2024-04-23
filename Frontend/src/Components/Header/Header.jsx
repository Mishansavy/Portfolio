import React from "react";
//styles import
import {
  HeadMainContainer,
  Nav,
  NavTitle,
  NavMenu,
  MenuLink,
  Titlediv,
} from "../../Styles/Styles";

import { useNavigate } from "react-router-dom";
export const Header = () => {
  // title
  const mishan = "Mishan Raj Shah";
  const navigate = useNavigate();
  const Home = () => {
    console.log("Home is this clicked");
    navigate("/");
  };
  const aboutme = () => {
    console.log("aboutme is this clicked");
    navigate("/aboutme");
  };
  const portfolio = () => {
    console.log("portfolio is this clicked");
    navigate("/portfolio");
  };
  const contact = () => {
    console.log("contact is this clicked");
    navigate("/contactMe");
  };

  return (
    <HeadMainContainer>
      <Titlediv>
        <NavTitle onClick={Home}>{mishan}</NavTitle>
      </Titlediv>
      <Nav>
        <NavMenu>
          <MenuLink onClick={Home}>Home</MenuLink>
        </NavMenu>
        <div>
          <MenuLink onClick={aboutme}>About Me</MenuLink>
        </div>
        <div>
          <MenuLink onClick={portfolio}>Portfolio</MenuLink>
        </div>
        <div>
          <MenuLink onClick={contact}>Contact</MenuLink>
        </div>
      </Nav>
    </HeadMainContainer>
  );
};
