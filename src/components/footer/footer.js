import React from "react";
import { Pane, Paragraph } from "evergreen-ui";
import Container from "../container/container";
import SectionDivider from "../section-divider/section-divider";
import ApexLogo from "../../assets/images/Apex-Logo.png";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { NavList } from "../header/header";

const Footer = () => {
  return (
    <Container maxWidth={1100} fontFamily="'DM Sans', sans-serif">
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingY={20}
      >
        <Pane>
          <img src={ApexLogo} alt="apex logo" />
        </Pane>

        {/* <Pane> */}
        <NavList>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Support</li>
        </NavList>
        {/* </Pane> */}
        <Pane display="flex" alignItems=" center" gap={25}>
          <Twitter cursor="pointer" />
          <Facebook cursor="pointer" />
          <Instagram cursor="pointer" />
          <Github cursor="pointer" />
        </Pane>
      </Pane>
      <SectionDivider />
      <Pane display="flex" justifyContent="space-between" paddingY={20}>
        <Paragraph fontFamily="inherit">
          © Copyright 2022, All Rights Reserved
        </Paragraph>
        <Pane display="flex" gap={30}>
          <Paragraph fontFamily="inherit" cursor="pointer">
            Privacy Policy{" "}
          </Paragraph>
          <Paragraph fontFamily="inherit" cursor="pointer">
            Terms & Conditions
          </Paragraph>
        </Pane>
      </Pane>
    </Container>
  );
};

export default Footer;
