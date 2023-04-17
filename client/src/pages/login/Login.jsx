import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../components/textError/TextError";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
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
  password: "",
  email: "",
};

const validationSchema = Yup.object({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

// const onSubmit = async (values, { setSubmitting }) => {
//   // setTimeout(() => {
//   //   alert(JSON.stringify(values, null, 2));
//   //   setSubmitting(false);
//   // }, 400);
//   // console.log(values);
// };
const onSubmit = (values, { setSubmitting }) => {
  axios.post("/api/auth/login", values).then((res) => {
    if (res.status === 200) {
      if (
        signIn({
          token: res.data.token,
          expiresIn: res.data.expiresIn,
          tokenType: "Bearer",
          authState: res.data.authUserState,
          refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
          refreshTokenExpireIn: res.data.refreshTokenExpireIn, // Only if you are using refreshToken feature
        })
      ) {
        // Only if you are using refreshToken feature
        // Redirect or do-something
      } else {
        //Throw error
      }
    }
  });
};
const Login = () => {
  const signIn = useSignIn();

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
              Sign In
            </Button>
            <Tip>
              Don't have an account{" "}
              <StyledLink to="/signup">Register</StyledLink>
            </Tip>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
