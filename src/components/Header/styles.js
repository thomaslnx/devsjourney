import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 105px;
  background-color: #fff;
  position: fixed;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.image`
  position: relative;
  margin-top: 0px;
  margin-left: 0px;
`;

export const Menu = styled.div`
  position: realtive;
  margin-left: 60px;
  margin-top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    color: #449aaa;
  }

  button {
    background-color: #6acc30;
    height: 50px;
    width: 300px;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
  }
`;
