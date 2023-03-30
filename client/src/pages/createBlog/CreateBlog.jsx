import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const FormContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Form = styled.form``;
const Input = styled.input`
  width: 100%;
  height: 10vh;
  padding: 20px;
  font-size: 25px;
  margin-top: 25px;
`;

const Label = styled.label`
  display: block;
  width: 50px;
  cursor: pointer;
`;
const Button = styled.button`
  padding: 25px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 10vh;
  padding: 20px;
  font-size: 25px;
  margin-top: 25px;
`;

const FileInput = styled(Input)`
  display: none;
`;

const CreateBlog = () => {
  // const [title,setTitle] = useState();
  // const [textArea,setTextArea] = useState()
  const [formValue, setformValue] = useState({
    title: "",
    desc: "",
    img: "",
  });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    // store the states in the form data
    const blogData = new FormData();
    blogData.append("username", formValue.title);
    blogData.append("password", formValue.desc);
    blogData.append("password", formValue.desc);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "/api/login",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Img src="/assets/write.jpg" />
        </ImgContainer>
        <FormContainer>
          <Form>
            <Input
              placeholder="Title"
              type="text"
              autoFocus="true"
              required
              value={formValue.title}
              onChange={handleChange}
            />
            <TextArea
              placeholder="Tell your story"
              type="text-area"
              required
              value={formValue.desc}
              onChange={handleChange}
            />
            <Label htmlFor="image">
              <AddCircleOutlineIcon fontSize="large" />
            </Label>
            <FileInput
              type="file"
              id="image"
              of="file"
              value={formValue.img}
              onChange={handleChange}
            />
            <Button type="submit">Publish</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default CreateBlog;
