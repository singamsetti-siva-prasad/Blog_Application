import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

//styles, use
const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  font-family: "Exo 2", sans-serif;
  font-weight: bold;
  box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.1);
  position: sticky;
  background-color: white;
  top: 0;
  padding: 1%;
`;
const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;
const Middle = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Logo = styled.img`
  height: 30px;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  font-size: large;
  background-color: ${(props) =>
    props.type === "signup" ? "#14cc59" : "#E8E2E8"};
  color: ${(props) => (props.type === "signup" ? "white" : "black")};
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const MenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Icon = styled(LightbulbOutlinedIcon)`
  cursor: pointer;
`;

const Navbar = () => {
  const user = true;
  return (
    <Container>
      <Left>
        <MenuItem to="/">
          <Logo src="/assets/block-mentor-color-on-transparent-background.png" />
        </MenuItem>
      </Left>
      <Middle>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/newsletter">News Letter</MenuItem>
        <MenuItem to="/createblog">Create Blog</MenuItem>
        <Icon />
      </Middle>
      <Right>
        {user ? (
          <>
            <MenuItem to="/signup">
              <Button type="signup">Sign Up</Button>
            </MenuItem>
            <MenuItem to="/login">
              <Button>Login</Button>
            </MenuItem>
          </>
        ) : (
          <MenuItem to="/">
            <Button>Logout</Button>
          </MenuItem>
        )}
      </Right>
    </Container>
  );
};

export default Navbar;
