import React from "react";
import { Header, HeaderContainer, Logo } from "./styles";

const HeaderConmponent = () => {
  return (
    <Header>
      <HeaderContainer>
        <Logo
          className="HeaderBlock"
          src="./images/logo.png"
          alt="Retargeting Logo"
        />
      </HeaderContainer>
    </Header>
  );
};

export default HeaderConmponent;
