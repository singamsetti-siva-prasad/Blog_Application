import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../components/textError/TextError";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Button = styled.button`
  padding: 20px 20px;
  border: none;
  border-radius: 10px;
  background-color: #14cc59;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #93c6e7; */
  background-image: url("/assets/networkconnection.jpg");
  border-radius: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const StyledField = styled(Field)`
  width: 50%;
  height: 10%;
  margin-bottom: 1.2rem;
  padding: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
`;

const Tip = styled.p`
  font-weight: bold;
  color: white;
`;

const StyledLink = styled(Link)`
  color: red;
`;

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Required")
    .min(8, "Must be minimum 8 characters"),
  email: Yup.string().email("Invalid email address").required("Required"),
  username: Yup.string()
    .required("Required")
    .max(8, "Must be 8 characters or less"),
});

const onSubmit = async (values, { setSubmitting }) => {
  // store the states in the form data

  try {
    // make axios post request
    const response = await axios.post("/api/auth/register", values);
    response
      .then(alert("registered succesfully"))
      .catch(alert("failed to register"));
  } catch (error) {
    console.log(error);
  }
};
const SignUp = () => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <StyledForm>
            <StyledField
              name="username"
              className="form-input"
              placeholder="user name"
              autoComplete="off"
              type="text"
            />
            <ErrorMessage name="username" component={TextError} />
            <StyledField
              name="email"
              className="form-input"
              placeholder="Email"
              autoComplete="off"
              type="email"
            />
            <ErrorMessage name="email" component={TextError} />
            <StyledField
              name="password"
              className="form-input"
              placeholder="password"
              autoComplete="off"
              type="password"
            />
            <ErrorMessage name="password" component={TextError} />

            <Button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Sign Up
            </Button>
            <Tip>
              Already have an account <StyledLink to="/login">Login</StyledLink>
            </Tip>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
