import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Pane, Text, majorScale } from "evergreen-ui";
import Container from "../container/container";
import ApexLogo from "../../assets/images/Apex-Logo.png";
import { ReactComponent as Hamburger } from "../../assets/icons/menu-hamburger.svg";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

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
  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });
  return (
    <Container
      maxWidth={1180}
      // display="flex"
      // alignItems="center"
      // justifyContent="space-between"
      // fontFamily="'DM Sans', sans-serif"
      // // fontFamily="DM Sans"
      // paddingY={majorScale(1)}
      border="1px solid red"
      // paddingX={350}
    >
      <Pane
        // paddingX={15}
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

        {isTablet ? (
          <>
            <NavList>
              <li>Demos</li>
              <li>About</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </NavList>
            <Pane>
              <Text
                fontSize="16px"
                fontFamily="inherit"
                fontWeight={500}
                color="var(--darker-default-color)"
                cursor="pointer"
              >
                Login
              </Text>
              <GetStartedBtn>Get Started Free</GetStartedBtn>
            </Pane>
          </>
        ) : (
          <Hamburger />
        )}
      </Pane>
    </Container>
  );
};

export default Header;
