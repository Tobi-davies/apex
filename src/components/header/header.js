import React from "react";
import styled from "@emotion/styled";
import { Pane, Text, majorScale } from "evergreen-ui";
import Container from "../container/container";
import ApexLogo from "../../assets/images/Apex-Logo.png";

const GetStartedBtn = styled.button`
  outline: none;
  padding: 8px 12px;
  background-color: #fb8e0b;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "DM Sans", sans-serif;
  margin-left: 20px;
  font-size: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;

  li {
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    color: var(--darker-default-color);
  }
`;

const Header = () => {
  return (
    <Container
      maxWidth={1100}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      fontFamily="'DM Sans', sans-serif"
      // fontFamily="DM Sans"
      paddingY={majorScale(1)}
    >
      <Pane>
        <img src={ApexLogo} alt="apex logo" />
      </Pane>

      {/* <Pane> */}
      <NavList>
        <li>Demos</li>
        <li>About</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
      </NavList>
      {/* </Pane> */}
      <Pane>
        <Text fontSize="16px" fontFamily="inherit">
          Login
        </Text>
        <GetStartedBtn>Get Started Free</GetStartedBtn>
      </Pane>
    </Container>
  );
};

export default Header;
