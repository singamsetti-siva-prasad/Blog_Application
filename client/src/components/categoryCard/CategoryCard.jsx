import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 50px;
  margin-left: 10%;
  border: 1px solid #518063;
  border-radius: 5px;
  background-color: #e8e2e8;
  margin-top: 5%;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px 0px 15px 8px rgba(0, 0, 0, 0.1);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 30px;
`;
const Title = styled.p`
  font-family: "Marcellus", serif;
  font-weight: bolder;
`;

const CategoryCard = ({ category }) => {
  return (
    <>
      <Container key={category._id}>
        <Wrapper>
          <Image src="assets/react-logo.png" />
          <Title>{category.name}</Title>
        </Wrapper>
      </Container>
    </>
  );
};

export default CategoryCard;
