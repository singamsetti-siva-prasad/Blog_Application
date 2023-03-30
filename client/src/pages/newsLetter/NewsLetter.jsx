import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
const Input = styled.input`
  width: 50%;
  height: 50px;
  padding: 0px 20px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Button = styled.button`
  height: 50px;
  padding: 0px 15px;
  font-weight: bold;
  background-color: #14cc59;
  color: white;
  font-size: large;
  border: none;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const Form = styled.form`
  background-image: url("/assets/techbackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 50px;
  margin: 5%;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Subscribe for our news letter</Title>

        <Form>
          <Input
            placeholder="Enter your email address"
            type="email"
            autoFocus="true"
          />
          <Button>Subscribe</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewsLetter;
