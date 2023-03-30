import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: -999;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
`;
const Video = styled.video`
  width: 100%;
  height: 200%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 3rem;
  width: fit-content;
  color: white;
  text-align: center;
  border-bottom: 2px solid white;
  margin-bottom: 5%;
`;

const Quote = styled.p`
  color: white;
  font-size: 2rem;
`;

const Desc = styled.p`
  color: white;
  margin-top: 10%;
  font-size: 1.2rem;
`;
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Video autoPlay loop muted>
          <source src="/assets/greenGlobe.mp4" type="videO/mp4"></source>
        </Video>
        <Content>
          <Title>About Us</Title>
          <Quote>
            Gaining Knowledge is the first step to wisdom, Sharing it is the
            first step to humanity
          </Quote>
          <Desc>
            We strongly believe in the above quote and our aim is to create a
            platform to share, gain Knowledge related to latest web technologies
          </Desc>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default About;
