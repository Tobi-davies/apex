import React from "react";
import { Pane, Text, Paragraph, minorScale, majorScale } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/header/header";
import Container from "../../components/container/container";
import VideoMessageIcon from "../../assets/icons/video-messaging-icon.svg";
import SaveTimeIcon from "../../assets/icons/save-time.svg";
import KeepSafeIcon from "../../assets/icons/keep-safe.svg";
import VideoChatImage from "../../assets/images/videochat-Image.png";
import ConversationsImage from "../../assets/images/conversations-icon.svg";
import MobileConversationsImage from "../../assets/images/mobile-conversations.svg";
import InboxImage from "../../assets/images/inbox.svg";
import curlyShapes from "../../assets/icons/curly-shapes.svg";
import estherImage from "../../assets/images/esther-howard.png";
import wadeImage from "../../assets/images/wade-warren.png";
import CustomBtn from "../../components/custom-button/custom-button";
import Footer from "../../components/footer/footer";
import LandingPage from "../landing-page/landing-page";
import { VIEWPORT_BREAKPOINTS } from "../../enums";

const Home = () => {
  const isMobile = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.sm}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.md}px)`,
  });

  const isLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.lg}px)`,
  });

  const isLargeLaptop = useMediaQuery({
    query: `(min-width: ${VIEWPORT_BREAKPOINTS.xl}px)`,
  });
  return (
    <>
      {/* header */}
      <Header />

      {/* landing page */}
      <LandingPage />

      {/* Features */}
      <Container
        maxWidth={1160}
        fontFamily="'DM Sans', sans-serif"
        paddingBottom={isTablet ? majorScale(10) : majorScale(4)}
        paddingTop={isTablet ? majorScale(3) : majorScale(2)}
        overflowX="hidden"
        // border="1px solid black"
      >
        {/* heading */}
        <Text
          is="h2"
          textAlign="center"
          fontSize={isTablet ? 36 : 30}
          color="#1B1C20"
          fontFamily="Uregular"
          paddingBottom={10}
          // marginBottom={10}
          data-aos="fade-down"
        >
          Features for a better experience
        </Text>
        <Pane
          display="flex"
          flexWrap="wrap"
          //  gap={12}
          // className="row"
        >
          {/* First feature */}
          <Pane
            // width="33.3%"
            className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0"
            // border="1px solid red"
            display="flex"
            flexDirection={isTablet ? "row" : "column"}
            textAlign={isTablet ? "unset" : "center"}
            gap={minorScale(3)}
            padding={12}
            data-aos="fade-right"
          >
            <Pane>
              <img
                width="45px"
                src={VideoMessageIcon}
                alt="video messaging icon"
              />
            </Pane>
            <Pane>
              <Text color="#1B1C20" fontSize={19} fontFamily="Uregular">
                Video messaging
              </Text>
              <Paragraph
                fontSize={15}
                fontFamily="inherit"
                color="#383A47"
                marginTop={minorScale(3)}
              >
                This software is very easy for you to manage. You can use it as
                you wish.
              </Paragraph>
            </Pane>
          </Pane>

          {/* Second feature */}
          <Pane
            // width="33.3%"
            className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0"
            // border="1px solid red"
            display="flex"
            flexDirection={isTablet ? "row" : "column"}
            textAlign={isTablet ? "unset" : "center"}
            gap={minorScale(3)}
            padding={12}
            data-aos="fade-up"
          >
            <Pane>
              <img width="45px" src={SaveTimeIcon} alt="save time icon" />
            </Pane>
            <Pane>
              <Text color="#1B1C20" fontSize={19} fontFamily="Uregular">
                Save your time
              </Text>
              <Paragraph
                fontSize={15}
                fontFamily="inherit"
                color="#383A47"
                marginTop={minorScale(3)}
              >
                This software is very easy for you to manage. You can use it as
                you wish.
              </Paragraph>
            </Pane>
          </Pane>

          {/* Third feature */}
          <Pane
            // width="33.3%"
            className="col-12 col-md-6 col-lg-4 mx-md-auto"
            // border="1px solid red"
            display="flex"
            flexDirection={isTablet ? "row" : "column"}
            textAlign={isTablet ? "unset" : "center"}
            gap={minorScale(3)}
            padding={12}
            data-aos="fade-left"
          >
            <Pane>
              <img width="45px" src={KeepSafeIcon} alt="keep safe icon" />
            </Pane>
            <Pane>
              <Text color="#1B1C20" fontSize={19} fontFamily="Uregular">
                Keep safe & private
              </Text>
              <Paragraph
                fontSize={15}
                fontFamily="inherit"
                color="#383A47"
                marginTop={minorScale(3)}
              >
                This software is very easy for you to manage. You can use it as
                you wish.
              </Paragraph>
            </Pane>
          </Pane>
        </Pane>
      </Container>

      {/* Libe video chat */}
      <Pane
        backgroundColor="var(--gray-background-color)"
        paddingY={
          isLaptop ? majorScale(10) : isMobile ? majorScale(7) : majorScale(5)
        }
        fontFamily="'DM Sans', sans-serif"
        overflowX="hidden"
      >
        <Container
          maxWidth={1180}
          display="flex"
          flexDirection={isLaptop ? "row" : "column"}
          // border="1px solid black"
        >
          <Pane
            width={isLaptop ? "50%" : "100%"}
            // border="1px solid red"
            display="flex"
            alignItems="center"
            justifyContent={isLaptop ? "unset" : "center"}
            // paddingLeft={15}
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <img
              width={isLaptop ? "80%" : isMobile ? "400px" : "100%"}
              // height={isMobile ? "unset" : "40%"}
              src={VideoChatImage}
              alt="video-chat"
            />
          </Pane>
          <Pane
            width={isLaptop ? "50%" : "100%"}
            // border="1px solid red"
            display="flex"
            alignItems="center"
            paddingRight={15}
          >
            <Pane
              maxWidth={isLaptop ? 420 : "unset"}
              width="100%"
              // border="1px solid green"
              // textAlign={isLaptop ? "unset" : "center"}
              // paddingRight={30}
              paddingTop={
                isLaptop ? "unset" : isMobile ? majorScale(4) : majorScale(2)
              }
            >
              <Paragraph
                fontSize={isTablet ? 40 : 32}
                color="#1B1C20"
                // marginBottom={30}
                marginBottom={isTablet ? 30 : 20}
                lineHeight={1}
                paddingTop={10}
                fontFamily="Uregular"
                textAlign={isLaptop ? "unset" : isMobile ? "center" : "unset"}
                maxWidth={600}
                // border="1px solid red"
                className="mx-sm-auto mx-lg-0"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Meet your customers, with live video chat
              </Paragraph>
              <Paragraph
                color="#383A47"
                fontFamily="inherit"
                fontSize={isLaptop ? 16 : 18}
                marginBottom={isTablet ? 20 : 15}
                maxWidth={isLaptop ? 380 : isMobile ? 450 : "unset"}
                textAlign={isLaptop ? "unset" : isMobile ? "center" : "unset"}
                className="mx-sm-auto mx-lg-0"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                Proin faucibus nibh et sagittis a. Lacinia purus ac amet
                pellentesque aliquam enim.
              </Paragraph>
              <Paragraph
                color="#383A47"
                fontFamily="inherit"
                fontSize={16}
                marginBottom={isMobile ? 10 : 0}
                maxWidth={isLaptop ? 380 : isMobile ? 450 : "unset"}
                // border="1px solid red"
                textAlign={isLaptop ? "unset" : isMobile ? "center" : "unset"}
                className="m-sm-auto m-lg-0"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Get paychecks up to two days early. Get a $20 bonus when you
                receive qualifying direct deposits
              </Paragraph>
            </Pane>
          </Pane>
        </Container>
      </Pane>

      {/* conversations */}
      <Pane
        backgroundColor="#FFFFFF"
        paddingY={majorScale(3)}
        fontFamily="'DM Sans', sans-serif"
        overflowX="hidden"
      >
        <Container
          maxWidth={1200}
          className="row"
          flexDirection={
            isLaptop ? "row" : isTablet ? "column" : "column-reverse"
          }
          gap={isLaptop ? "unset" : 20}
        >
          <Pane
            className="col-12 col-lg-5"
            display="flex"
            alignItems="center"
            justifyContent={isLaptop ? "unset" : "center"}
            // border="1px solid red"
          >
            <Pane
              // className="ml-n3 mr-n3 mx-sm-auto ml-lg-n3"
              //note the styling
              // className="mr-n3"
              // className="mx-sm-auto"
              // className="mx-sm-auto ml-n3 mr-n3"
              // maxWidth={420}
              maxWidth={isLaptop ? 450 : isMobile ? 600 : "unset"}
              textAlign={isLaptop ? "unset" : isMobile ? "center" : "unset"}
              // border="1px solid green"
              paddingLeft={isLargeLaptop ? 20 : isTablet ? 5 : 0}
              marginRight={isLaptop ? -15 : isMobile ? 0 : -15}
              marginLeft={isMobile ? 0 : -15}
            >
              <Paragraph
                fontFamily="Uregular"
                fontWeight={700}
                fontSize={isTablet ? 40 : 29}
                color="var(--darker-default-color)"
                lineHeight={1}
                marginBottom={isTablet ? 30 : 20}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Start selling directly inside conversations
              </Paragraph>
              <Paragraph
                fontFamily="inherit"
                fontSize={15}
                marginBottom={30}
                data-aos="fade-up"
                data-aos-delay="250"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered all injected humour or randomised
                words which don't look even slightly believable.{" "}
              </Paragraph>
              {/* <CustomBtn>Start Chatting Now</CustomBtn> */}
              <Pane
                // border="1px solid black"
                // className="mx-sm-auto mx-lg-0"
                display="flex"
                justifyContent={
                  isLaptop ? "unset" : isMobile ? "center" : "unset"
                }
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <CustomBtn>Start Chatting Now</CustomBtn>
              </Pane>
            </Pane>
          </Pane>
          <Pane
            className="col-12 col-lg-7"
            // border="1px solid red"
            // display="flex"
            // alignItems="flex-start"
            // position="relative"
            display="flex"
            alignItems={isLaptop ? "unset" : "center"}
            justifyContent={isLaptop ? "unset" : "center"}
          >
            {isTablet ? (
              <img
                // className="mx-auto mx-lg-0"
                // className="mx-n5"
                width={isLaptop ? "100%" : isMobile ? "500px" : "120%"}
                src={ConversationsImage}
                // style={{ border: "1px solid red" }}
                alt="conversations"
                // style={{ border: "1px solid black" }}
              />
            ) : (
              <img
                width="330px"
                src={MobileConversationsImage}
                alt="conversations"
              />
            )}
          </Pane>
        </Container>
      </Pane>

      {/* customer orders */}
      <Pane
        paddingY={isTablet ? majorScale(9) : majorScale(5)}
        backgroundColor="var(--gray-background-color)"
        fontFamily="'DM Sans', sans-serif"
        overflowX="hidden"
      >
        <Container
          maxWidth={1130}
          display="flex"
          flexDirection={
            isLaptop ? "row" : isTablet ? "column-reverse" : "column"
          }
          gap={isLaptop ? 0 : 20}
          // className="row"
          // border="1px solid red"
        >
          <Pane
            // width="50%"
            // border="1px solid red"
            display="flex"
            justifyContent="center"
            className="col-12 col-lg-6"
            // marginX={isMobile ? 0 : -15}
            // width="100%"
            padding={0}
          >
            <img
              width={isLaptop ? "90%" : isTablet ? "unset" : "100%"}
              src={InboxImage}
              alt="inbox"
              // className="mx-n5"
            />
          </Pane>
          <Pane
            //  width="50%"
            className="col-12 col-lg-6"
            // className="col-12 col-lg-6 pr-4"
            // border="2px solid blue"
            display="flex"
            alignItems="center"
            justifyContent={isLaptop ? "flex-end" : "center"}
            // paddingRight={isLaptop ? 24 : isMobile ? 15 : 0}
            paddingRight={0}
            paddingLeft={isMobile ? "unset" : 0}
            // marginLeft={isMobile ? "unset" : -15}
            // marginRight={isMobile ? "unset" : -35}
          >
            <Pane
              // border="1px solid yellow"
              maxWidth={isLaptop ? 419 : "unset"}
              textAlign={isLaptop ? "unset" : isMobile ? "center" : "unset"}
              width={isLaptop ? "unset" : isMobile ? 700 : "unset"}
              marginX={isMobile ? "unset" : -15}
            >
              <Paragraph
                fontFamily="Uregular"
                fontWeight={700}
                fontSize={isTablet ? 40 : 32}
                color="var(--darker-default-color)"
                lineHeight={1}
                marginBottom={20}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Get direct orders from your customers
              </Paragraph>
              <Paragraph
                fontFamily="inherit"
                fontSize={15}
                marginBottom={60}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Create custom landing pages with Rareblocks that converts more
                visitors than any website. With lots of unique blocks easily
                build a page. There are many variations of passages of
                available.
              </Paragraph>

              {/* NEW */}
              <Pane
                className="mx-n3 mx-sm-auto mx-lg-0"
                // className="row mx-sm-auto mx-lg-0"
                display="flex"
                width={isLaptop ? "unset" : isMobile ? 400 : "unset"}
                // alignItems={isLaptop ? "unset" : isMobile ? "center" : "unset"}
                // justifyContent={
                //   isLaptop ? "unset" : isMobile ? "center" : "unset"
                // }
              >
                <Pane
                  className="col-md-6"
                  display="flex"
                  // border="1px solid red"
                  marginLeft={isLaptop ? -15 : 0}
                >
                  <Pane
                    // className="col-md-6"
                    fontWeight={700}
                    fontFamily="inherit"
                    color="var(--darker-default-color)"
                    fontSize={26}
                  >
                    4.3K+
                  </Pane>
                  <Pane className="col-md-6" fontSize={14}>
                    Website’s Powering
                  </Pane>
                </Pane>
                <Pane
                  className="col-md-6"
                  display="flex"
                  // border="1px solid red"
                >
                  <Pane
                    // className="col-md-5"
                    // className="mx-n5"
                    fontWeight={700}
                    fontFamily="inherit"
                    color="var(--darker-default-color)"
                    fontSize={26}
                  >
                    7M+
                  </Pane>
                  <Pane
                    className="col-md-7"
                    fontSize={13}
                    // border="1px solid blue"
                    textAlign="left"
                  >
                    Chats in <br /> Last 2022
                  </Pane>
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Container>
      </Pane>

      {/* client review */}
      <Pane
        backgroundColor="var(--orange-background-color)"
        fontFamily="'DM Sans', sans-serif"
        paddingY={isTablet ? majorScale(7) : majorScale(5)}
        backgroundImage={`url(${curlyShapes})`}
        backgroundRepeat="no-repeat"
        backgroundSize="30% 60%"
        overflowX="hidden"
      >
        <Container
          maxWidth={1180}
          // border="1px solid black"
        >
          <Paragraph
            is="h2"
            textAlign="center"
            fontSize={isTablet ? 36 : 29}
            fontWeight={700}
            color="#fff"
            fontFamily="inherit"
            marginBottom={majorScale(5)}
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Our blessed client <br /> said about us 😍
          </Paragraph>
          <Pane className="row">
            <Pane className="c ol-12 col-md-6">
              <Pane paddingRight={isTablet ? 20 : 0}>
                <Pane
                  backgroundColor="#fff"
                  paddingY={20}
                  paddingX={30}
                  borderRadius={8}
                  position="relative"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  <Pane
                    position="absolute"
                    height={16}
                    width={16}
                    backgroundColor="#fff"
                    bottom="-7px"
                    left="50%"
                    transform="rotate(45deg)"
                  />
                  <Paragraph
                    fontWeight={700}
                    color="var(--orange-default-color)"
                    textAlign="center"
                    fontFamily="inherit"
                    fontSize={18}
                    marginBottom={5}
                  >
                    “Incredible Experience”
                  </Paragraph>
                  <Paragraph fontFamily="inherit" textAlign="center">
                    We had an incredible experience working with Mixland and
                    were impressed they made such a big difference in only three
                    weeks. Our team is so grateful for the wonderful
                    improvements they made and their ability to get familiar
                    with the concept so quickly.
                  </Paragraph>
                </Pane>

                <Pane display="flex" justifyContent="center" className="mt-3">
                  <Pane
                    display="flex"
                    alignItems="center"
                    gap={15}
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <img src={wadeImage} width="50" alt="wade warren" />
                    <Pane>
                      <Paragraph
                        fontSize={15}
                        fontWeight={500}
                        fontFamily="inherit"
                        color="#fff"
                      >
                        Wade Warren
                      </Paragraph>
                      <Text fontSize={13} fontFamily="inherit" color="#fff">
                        CEO, ABC Corporation
                      </Text>
                    </Pane>
                  </Pane>
                </Pane>
              </Pane>
            </Pane>
            <Pane className="col-12 col-md-6 mt-md-0 mt-4">
              <Pane paddingLeft={isTablet ? 20 : 0}>
                <Pane
                  backgroundColor="#fff"
                  paddingY={20}
                  paddingX={30}
                  borderRadius={8}
                  position="relative"
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  <Pane
                    position="absolute"
                    height={16}
                    width={16}
                    backgroundColor="#fff"
                    bottom="-7px"
                    left="50%"
                    transform="rotate(45deg)"
                  />
                  <Paragraph
                    fontWeight={700}
                    color="var(--orange-default-color)"
                    textAlign="center"
                    fontFamily="inherit"
                    fontSize={18}
                    marginBottom={5}
                  >
                    “Dependable, Responsive, Professional”
                  </Paragraph>
                  <Paragraph fontFamily="inherit" textAlign="center">
                    Fermin Apps has collaborated with Mixland team for several
                    projects such as Photo Sharing Apps and Custom Social
                    Networking Apps. The experience has been pleasant,
                    professional and exceeding our expectations. The team is
                    always thinking beyond.
                  </Paragraph>
                </Pane>

                <Pane display="flex" justifyContent="center" className="mt-3">
                  <Pane
                    display="flex"
                    alignItems="center"
                    gap={15}
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    {/* <Pane
                      backgroundImage={`url(${estherImage})`}
                      height={40}
                      backgroundSize="cover"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                    /> */}
                    <img src={estherImage} width="50" alt="esther howard" />
                    <Pane>
                      <Paragraph
                        fontSize={15}
                        fontWeight={500}
                        fontFamily="inherit"
                        color="#fff"
                      >
                        Esther Howard
                      </Paragraph>
                      <Text fontSize={13} fontFamily="inherit" color="#fff">
                        CEO, ABC Corporation
                      </Text>
                    </Pane>
                  </Pane>
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Container>
      </Pane>

      {/* Ready to grow */}
      <Pane backgroundColor="var(--gray-background-color)" overflowX="hidden">
        <Container
          maxWidth={700}
          paddingY={isTablet ? majorScale(10) : majorScale(4)}
          display="flex"
          flexDirection="column"
          // justifyContent="center"
          alignItems="center"
        >
          <Paragraph
            // is="h3"
            textAlign="center"
            fontFamily="Uregular"
            fontWeight={700}
            fontSize={isTablet ? 43 : 30}
            color="var(--darker-default-color)"
            lineHeight={isTablet ? 1 : 1.2}
            marginBottom={isTablet ? 30 : 20}
            data-aos="fade-up"
            data-aos-delay="1050"
          >
            Ready to grow your business? Start with Apex, become faster every
            second
          </Paragraph>
          <div data-aos="zoom-in" data-aos-delay="1200">
            <CustomBtn>Start Chatting Now</CustomBtn>
          </div>
        </Container>

        <Footer />
      </Pane>
    </>
  );
};

export default Home;
