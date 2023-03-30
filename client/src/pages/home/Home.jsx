import React, { useEffect, useState } from "react";
import BlogSnippet from "../../components/blogSnippet/BlogSnippet";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Left = styled.div`
  width: 70%;
  padding: 10px;
`;
const Right = styled.div`
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: sticky;
  top: 50px;
`;
const Title = styled.h1`
  margin-top: 50px;
  color: #518063;
`;
const PostsContainer = styled.div`
  width: 100%;
`;

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      await axios
        .get("api/blogs/")
        .then((res) => setBlogs(res.data))
        .catch((err) => {
          console.log(err);
        });
    };
    fetchBlogs();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Featured Posts</Title>
          <PostsContainer>
            <BlogSnippet blogs={blogs} />
          </PostsContainer>
        </Left>
        <Right>
          <Sidebar />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
