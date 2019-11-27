import React from "react";
import { Header, Logo, Menu } from "./styles";
import logo from "../../assets/images/logo/jornada-horizontal.png";

function HeaderHome() {
  return (
    <>
      <Header>
        <Logo>
          <img src={logo} width="320" height="130" alt="LogoHome" />
        </Logo>

        <Menu>
          <p> HOME </p>
          <p> O QUE POSSO APRENDER? </p>
          <p> ALCANÇAR O SUCESSO </p>
        </Menu>
      </Header>
    </>
  );
}

export default HeaderHome;
