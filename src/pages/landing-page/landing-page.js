import React from "react";
import { useMediaQuery } from "react-responsive";
import { Pane, Paragraph, Text } from "evergreen-ui";
import Container from "../../components/container/container";
import CustomBtn from "../../components/custom-button/custom-button";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as Goldstar } from "../../assets/icons/gold-star.svg";
import { ReactComponent as Graystar } from "../../assets/icons/gray-star.svg";
import ladyImage from "../../assets/images/lady.svg";
import customersImage from "../../assets/images/customers.svg";
import SectionDivider from "../../components/section-divider/section-divider";
import { VIEWPORT_BREAKPOINTS } from "../../enums/index";

const LandingPage = () => {
  const isMobile = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.lg}px)`,
  });

  return (
    <Pane fontFamily="'DM Sans', sans-serif" marginTop={30}>
      <Container
        maxWidth={1210}
        display="flex"
        className="row"
        // border="1px solid blue"
        gap={isLaptop ? "unset" : 30}
      >
        <Pane
          className="col-12 col-lg-5"
          // border="1px solid green"
          // paddingRight={40}
          paddingTop={isLaptop ? 70 : 30}
          // marginRight={40}
        >
          <Pane
            // border="1px solid red"
            //  width="85%"
            maxWidth={isLaptop ? 450 : "100%"}
            textAlign={isLaptop ? "unset" : isMobile ? "center" : "unset"}
            className="ml-n3 mt-n4 mt-xl-0 ml-xl-0"
          >
            <Paragraph
              color="#1B1C20"
              fontFamily="Uregular"
              fontSize={isTablet ? 44 : 32}
              lineHeight={isTablet ? 1 : 1.1}
              marginBottom={isTablet ? 30 : 20}
            >
              Start chatting with customers, anytime, anywhere with Apex
            </Paragraph>
            <Paragraph
              fontFamily="inherit"
              fontSize={16}
              // border="1px solid red"
              maxWidth={isLaptop ? 370 : isMobile ? 500 : "100%"}
              // margin={isLaptop ? "unset" : "auto"}
              // margin={isLaptop ? "unset" : "auto"}
              className="mx-sm-auto mx-lg-0"
              marginBottom={30}
            >
              {" "}
              Great software that allows you to chat from any place at any time
              without any interruption.
            </Paragraph>
            <Pane
              // border="1px solid black"
              // className="mx-sm-auto mx-lg-0"
              display="flex"
              justifyContent={
                isLaptop ? "unset" : isMobile ? "center" : "unset"
              }
            >
              <CustomBtn>
                Start Chatting Now <ArrowRight className="ml-3" />
              </CustomBtn>
            </Pane>

            <Pane
              //  className="row"
              display="flex"
              flexDirection={isMobile ? "row" : "column"}
              marginTop={isLaptop ? 85 : 40}
              justifyContent={isLaptop ? "unset" : "center"}
              // border="1px solid green"
              gap={isMobile ? "unset" : 10}
            >
              <Pane
                // className="col-md-7"
                // border="1px solid black"
                display="flex"
                gap={15}
                paddingRight={15}
                // borderRight="1px solid black"
              >
                <img width="100px" src={customersImage} alt="customers" />
                <Pane
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  gap={5}
                >
                  <Paragraph
                    fontWeight={700}
                    fontFamily="inherit"
                    color="var(--darker-default-color)"
                    fontSize={27}
                  >
                    2,291
                  </Paragraph>
                  <Paragraph
                    fontFamily="inherit"
                    color="var(--text-default-color)"
                  >
                    Happy Customers
                  </Paragraph>
                </Pane>
              </Pane>

              {isMobile ? (
                <SectionDivider
                  orientation={isMobile ? "vertical" : "horizontal"}
                  bgColor="var(--darker-default-color)"
                />
              ) : (
                <Pane maxWidth={50}>
                  <SectionDivider
                    orientation={isMobile ? "vertical" : "horizontal"}
                    bgColor="var(--darker-default-color)"
                  />
                </Pane>
              )}

              <Pane
                // className="col-md-5"
                // border="1px solid red"
                paddingLeft={15}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                gap={5}
                className="ml-n3 ml-sm-0"
              >
                <Paragraph
                  fontWeight={700}
                  fontFamily="inherit"
                  color="var(--darker-default-color)"
                  fontSize={27}
                >
                  4.8/5
                </Paragraph>
                <Pane display="flex" gap={10}>
                  <Pane>
                    <Goldstar />
                    <Goldstar />
                    <Goldstar />
                    <Goldstar />
                    <Graystar />
                  </Pane>
                  <Text fontFamily="inherit" color="var(--text-default-color)">
                    Rating
                  </Text>
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
        <Pane
          className="col-12 col-lg-7"
          // border="1px solid red"
          position="relative"
        >
          <img
            width="95%"
            src={ladyImage}
            alt="lady"
            // style={{
            //   position: "absolute",
            //   left: "-20px",
            // }}
          />
        </Pane>
      </Container>
    </Pane>
  );
};

export default LandingPage;
