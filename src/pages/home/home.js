import React from "react";
import { Pane, Text, Paragraph, minorScale, majorScale } from "evergreen-ui";
import Header from "../../components/header/header";
import Container from "../../components/container/container";
import VideoMessageIcon from "../../assets/icons/video-messaging-icon.svg";
import SaveTimeIcon from "../../assets/icons/save-time.svg";
import KeepSafeIcon from "../../assets/icons/keep-safe.svg";
import VideoChatImage from "../../assets/images/videochat-Image.png";
import ConversationsImage from "../../assets/images/conversations-icon.svg";
import InboxImage from "../../assets/images/inbox.svg";
import curlyShapes from "../../assets/icons/curly-shapes.svg";
import estherImage from "../../assets/images/esther-howard.png";
import wadeImage from "../../assets/images/wade-warren.png";
import CustomBtn from "../../components/custom-button/custom-button";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* Features */}
      <Container
        maxWidth={1100}
        fontFamily="'DM Sans', sans-serif"
        paddingBottom={majorScale(10)}
      >
        {/* heading */}
        <Text is="h2" textAlign="center" fontSize={36} color="#1B1C20">
          Features for a better experience
        </Text>
        <Pane display="flex" gap={12}>
          {/* First feature */}
          <Pane
            width="33.3%"
            border="1px solid red"
            display="flex"
            gap={minorScale(2)}
            padding={12}
          >
            <Pane>
              <img src={VideoMessageIcon} alt="video messaging icon" />
            </Pane>
            <Pane>
              <Text color="#1B1C20" fontSize={21}>
                Video messaging
              </Text>
              <Paragraph
                fontSize={16}
                fontFamily="inherit"
                color="#383A47"
                marginTop={minorScale(4)}
              >
                This software is very easy for you to manage. You can use it as
                you wish.
              </Paragraph>
            </Pane>
          </Pane>

          {/* Second feature */}
          <Pane
            width="33.3%"
            border="1px solid red"
            display="flex"
            gap={minorScale(2)}
            padding={12}
          >
            <Pane>
              <img src={SaveTimeIcon} alt="save time icon" />
            </Pane>
            <Pane>
              <Text color="#1B1C20" fontSize={21}>
                Save your time
              </Text>
              <Paragraph
                fontSize={16}
                fontFamily="inherit"
                color="#383A47"
                marginTop={minorScale(4)}
              >
                This software is very easy for you to manage. You can use it as
                you wish.
              </Paragraph>
            </Pane>
          </Pane>

          {/* Third feature */}
          <Pane
            width="33.3%"
            border="1px solid red"
            display="flex"
            gap={minorScale(2)}
            padding={12}
          >
            <Pane>
              <img src={KeepSafeIcon} alt="keep safe icon" />
            </Pane>
            <Pane>
              <Text color="#1B1C20" fontSize={21}>
                Keep safe & private
              </Text>
              <Paragraph
                fontSize={16}
                fontFamily="inherit"
                color="#383A47"
                marginTop={minorScale(4)}
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
        backgroundColor="#F8F8FA"
        paddingY={majorScale(10)}
        fontFamily="'DM Sans', sans-serif"
      >
        <Container maxWidth={1100} display="flex">
          <Pane width="50%" border="1px solid red">
            <img width="80%" src={VideoChatImage} alt="video-chat" />
          </Pane>
          <Pane width="50%" border="1px solid red">
            <Pane maxWidth={500} border="1px solid green" paddingRight={30}>
              <Paragraph
                fontSize={48}
                color="#1B1C20"
                marginBottom={30}
                lineHeight={1}
                paddingTop={10}
                fontFamily="Uregular"
              >
                Meet your customers, with live video chat
              </Paragraph>
              <Paragraph
                color="#383A47"
                fontFamily="inherit"
                fontSize={16}
                marginBottom={20}
              >
                Proin faucibus nibh et sagittis a. Lacinia purus ac amet
                pellentesque aliquam enim.
              </Paragraph>
              <Paragraph
                color="#383A47"
                fontFamily="inherit"
                fontSize={16}
                marginBottom={20}
              >
                Get paychecks up to two days early. Get a $20 bonus when you
                receive qualifying direct deposits
              </Paragraph>
            </Pane>
          </Pane>
        </Container>
      </Pane>

      {/* conversations */}
      <Pane backgroundColor="#FFFFFF" paddingY={majorScale(5)}>
        <Container maxWidth={1100} display="flex">
          <Pane width="50%">
            <Paragraph fontSize={48} color="#1B1C20" fontFamily="Uregular">
              Start selling directly inside conversations
            </Paragraph>
            <Paragraph>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered all injected humour or randomised
              words which don't look even slightly believable.{" "}
            </Paragraph>
            <CustomBtn>Start Chatting Now</CustomBtn>
          </Pane>
          <Pane width="50%" border="1px solid red">
            <img width="90%" src={ConversationsImage} alt="conversations" />
          </Pane>
        </Container>
      </Pane>

      {/* customer orders */}
      <Pane
        paddingY={majorScale(5)}
        backgroundColor="var(--gray-background-color)"
        fontFamily="'DM Sans', sans-serif"
      >
        <Container maxWidth={1100} display="flex" className="row">
          <Pane
            // width="50%"
            border="1px solid red"
            display="flex"
            justifyContent="center"
            className="col-md-6"
          >
            <img width="90%" src={InboxImage} alt="inbox" />
          </Pane>
          <Pane
            //  width="50%"
            className="col-md-6"
            border="1px solid blue"
            display="flex"
            alignItems="center"
          >
            <Pane border="1px solid yellow" paddingLeft="20%">
              <Paragraph
                fontFamily="Uregular"
                fontWeight={700}
                fontSize={48}
                color="var(--darker-default-color)"
                lineHeight={1}
                marginBottom={30}
              >
                Get direct orders from your customers
              </Paragraph>
              <Paragraph fontFamily="inherit" fontSize={16} marginBottom={30}>
                Create custom landing pages with Rareblocks that converts more
                visitors than any website. With lots of unique blocks easily
                build a page. There are many variations of passages of
                available.
              </Paragraph>
              <Pane className="row">
                <Pane
                  className="col-md-6 row"
                  border="1px solid red"
                  display="flex"
                >
                  <Pane
                    className="col-md-6"
                    color="var(--darker-default-color)"
                    fontSize={40}
                    fontWeight={500}
                  >
                    4.3K+
                  </Pane>
                  <Pane className="col-md-6" fontSize={14}>
                    Website’s Powering
                  </Pane>
                </Pane>
                <Pane
                  className="col-md-6 row"
                  display="flex"
                  border="1px solid green"
                >
                  <Pane
                    className="col-md-6"
                    color="var(--darker-default-color)"
                    fontSize={40}
                    fontWeight={500}
                  >
                    7M+
                  </Pane>
                  <Pane className="col-md-6" fontSize={14}>
                    Chats in Last 2022
                  </Pane>
                </Pane>
                {/* <Pane></Pane> */}
              </Pane>
            </Pane>
          </Pane>
        </Container>
      </Pane>

      {/* client review */}
      <Pane
        backgroundColor="var(--orange-background-color)"
        fontFamily="'DM Sans', sans-serif"
        paddingY={majorScale(7)}
        backgroundImage={`url(${curlyShapes})`}
        backgroundRepeat="no-repeat"
        backgroundSize="30% 60%"
      >
        <Container maxWidth={1100}>
          <Paragraph
            is="h2"
            textAlign="center"
            fontSize={36}
            fontWeight={700}
            color="#fff"
            fontFamily="inherit"
            marginBottom={majorScale(5)}
          >
            Our blessed client <br /> said about us 😍
          </Paragraph>
          <Pane className="row">
            <Pane className="col-md-6">
              <Pane paddingRight={20}>
                <Pane
                  backgroundColor="#fff"
                  paddingY={20}
                  paddingX={30}
                  borderRadius={8}
                >
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

                <Pane display="flex" justifyContent="center" marginTop={10}>
                  <Pane display="flex" alignItems="center" gap={15}>
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
            <Pane className="col-md-6">
              <Pane paddingLeft={20}>
                <Pane
                  backgroundColor="#fff"
                  paddingY={20}
                  paddingX={30}
                  borderRadius={8}
                >
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

                <Pane display="flex" justifyContent="center" marginTop={10}>
                  <Pane display="flex" alignItems="center" gap={15}>
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
      <Pane backgroundColor="var(--gray-background-color)">
        <Container
          maxWidth={700}
          paddingY={majorScale(10)}
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
            fontSize={43}
            color="var(--darker-default-color)"
            lineHeight={1}
            marginBottom={30}
          >
            Ready to grow your business? Start with Apex, become faster every
            second
          </Paragraph>
          <CustomBtn>Start Chatting Now</CustomBtn>
        </Container>

        <Footer />
      </Pane>
    </>
  );
};

export default Home;
