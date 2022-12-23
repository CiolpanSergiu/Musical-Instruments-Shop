import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StyledForm = styled(Form)`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #3d4552;
  padding: 2rem 4rem;
  color: white;
  border-radius: 9px;
`;

const Header = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0 2rem 0;
`;

const StyledErrorMessage = styled.div`
  color: #e36f75;
  padding: 0.25rem 0 0.5rem 0;
  font-size: 0.8rem;
  max-width: 15rem;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem;
  background-color: #383838;
`;

const StyledField = styled(Field)`
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 5px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const ObligatoryField = styled.span`
  color: #e36f75;
  margin-left: 3px;
`;

const SubmitButton = styled.button`
  font-size: 1.2rem;
  margin: 2rem auto;
  padding: 0.5rem 0;
  width: 100%;
  background-color: lightskyblue;
  color: black;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

type ValuesObj = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: ValuesObj = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = () => {};

const validationSchema = Yup.object({
  fullName: Yup.string().required("This field is required !"),
  email: Yup.string()
    .email("Invalid email formal")
    .required("This field is required !"),
  password: Yup.string()
    .required("This field is required !")
    .min(6, "Password is too short !")
    .max(20, "Password is too long !"),
});

export default function LoginForm() {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <Header>Login</Header>

          <Label htmlFor="email">
            Email
            <ObligatoryField>*</ObligatoryField>
          </Label>
          <StyledField type="email" id="email" name="email" />
          <StyledErrorMessage>
            <ErrorMessage name="email" />
          </StyledErrorMessage>

          <Label htmlFor="password">
            Password
            <ObligatoryField>*</ObligatoryField>
          </Label>
          <StyledField type="password" id="password" name="password" />
          <StyledErrorMessage>
            <ErrorMessage name="password" />
          </StyledErrorMessage>

          <SubmitButton type="submit">Login</SubmitButton>
        </StyledForm>
      </Formik>
    </Container>
  );
}
