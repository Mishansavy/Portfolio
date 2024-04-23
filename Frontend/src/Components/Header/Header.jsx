import React from "react";
//styles import
import { HeadMainContainer, ImgDiv } from "../../Styles/Styles";
// img import
import mishan from "../../assets/img/mishan.jpg";
export const Header = () => {
  return (
    <HeadMainContainer>
      <ImgDiv src={mishan} alt="mishan raj shah" />
    </HeadMainContainer>
  );
};
