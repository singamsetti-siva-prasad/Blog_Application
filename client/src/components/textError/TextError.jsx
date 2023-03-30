import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: red;
  font-weight: bold;
  font-size: small;
`;

const TextError = (props) => {
  return <Container>{props.children}</Container>;
};

export default TextError;
