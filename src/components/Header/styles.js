import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 105px;
  background-color: #fff;
  position: fixed;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #333;
`;

export const Logo = styled.image`
  position: relative;
  margin-top: 0px;
  margin-left: 0px;
`;

export const Menu = styled.div`
  position: realtive;
  margin-left: 0px;
  margin-top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    color: #6e9ecc;
  }

  button {
    background-color: #1d5e1e;
    height: 50px;
    width: 300px;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
  }
`;
