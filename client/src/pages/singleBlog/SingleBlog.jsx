import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;
const Wrapper = styled.div`
  width: 60%;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
`;
const PostDetails = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;
const Author = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 100%;
`;
const Name = styled.p`
  font-weight: bold;
  color: green;
`;
const Time = styled.p``;

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  font-family: "Marcellus", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Banner = styled.img`
  max-width: 50%;
  height: 50%;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-weight: bold;
  line-height: 30px;
  font-size: 1rem;
  color: #595959;
`;

const SingleBlog = () => {
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];
  const [blogData, setBlogData] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      await axios
        .get("/api/blogs/" + blogId)
        .then((res) => setBlogData(res.data))
        .catch((err) => console.log(err));
    };
    fetchPost();
  }, [blogId]);

  return (
    <Container>
      <Wrapper>
        {/* <Title>{blog.title} </Title> */}
        <Title>{blogData.title}</Title>
        <PostDetails>
          <Author>
            <ProfilePic src="https://miro.medium.com/fit/c/250/168/1*taxEY4KocWgpotS6ABuWMg.png" />
            <Name>{blogData.username}</Name>
          </Author>
          {/* <Date>{`${new Date(blogData.updatedAt).toDateString()}`}</Date> */}
          <Time>{new Date(blogData.updatedAt).toDateString()}</Time>
        </PostDetails>
        <ContentContainer>
          <Banner src="https://blog.hubspot.com/hs-fs/hubfs/25_13%20Social%20Media%20Calendars%2c%20Tools%2c%20%26%20Templates%20to%20Plan%20Your%20Content-1.png?%20Templates%20to%20Plan%20Your%20Content-1.png&?%20Templates%20to%20Plan%20Your%20Content-1.png&width=893&height=600&name=25_13%20Social%20Media%20Calendars%2c%20Tools%2c%20%26%20Templates%20to%20Plan%20Your%20Content-1.png?%20Templates%20to%20Plan%20Your%20Content-1.png&?%20Templates%20to%20Plan%20Your%20Content-1.png" />

          <Content>{blogData.body}</Content>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleBlog;
