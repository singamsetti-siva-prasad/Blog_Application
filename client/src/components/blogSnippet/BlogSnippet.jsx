import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  width: 100%;
  height: 25vh;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 25px 0;
  border-radius: 10px;
  &:hover {
    box-shadow: inset 0px 0px 15px 8px rgba(0, 0, 0, 0.1);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Left = styled.div`
  flex: 3;
`;
const Right = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Desc = styled.p`
  font-family: "Quattrocento", serif;
  margin: 10px;
  font-weight: bold;
  color: #595959;
  text-overflow: ellipsis;
  overflow: hidden;
  /* display: -webkit-box; */

  -webkit-line-clamp: 2;
`;
const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
const Author = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const ProfilePic = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 5px;
`;
const Title = styled.h2`
  font-family: "Marcellus", serif;
  margin: 10px;
`;

const Text = styled.p`
  font-size: small;
  color: gray;
`;

const BlogSnippet = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <StyledLink to={`blogs/${blog._id}`} key={blog._id}>
          <Container>
            <Wrapper>
              <Left>
                <Img src="https://miro.medium.com/fit/c/250/168/1*taxEY4KocWgpotS6ABuWMg.png" />
              </Left>
              <Right>
                <Title>{blog.title}</Title>
                <Desc>{blog.body}</Desc>
                <Details>
                  <Author>
                    <ProfilePic src="https://miro.medium.com/fit/c/250/168/1*taxEY4KocWgpotS6ABuWMg.png" />
                    <Text>{blog.username}</Text>
                  </Author>
                  <Text>{new Date(blog.updatedAt).toDateString()}</Text>
                </Details>
              </Right>
            </Wrapper>
          </Container>
        </StyledLink>
      ))}
    </>
  );
};

export default BlogSnippet;
