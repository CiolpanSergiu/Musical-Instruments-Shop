import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormButton from "../miscellaneous/account-page/FormButton";
import CenteredSmallSpan from "../miscellaneous/account-page/CenteredSmallSpan";
import ObligatoryStar from "../miscellaneous/account-page/ObligatoryStar";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeProvider";
import sendAccountFormData from "../../functions/sendAccountFormData";
import checkSinginData from "../../functions/checkLoginData";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  padding: 2rem 4rem;
  color: ${(props) => props.theme.color};
  border-radius: 9px;
  margin: 3rem 0;
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

const AlreadyExistError = styled(StyledErrorMessage)`
  border: solid white 1px;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 1.125rem;
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

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

type ValuesObj = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const initialValues: ValuesObj = {
  fullName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("This field is required !"),
  email: Yup.string()
    .email("Invalid email formal")
    .required("This field is required !"),
  password: Yup.string()
    .required("This field is required !")
    .min(6, "Password is too short !")
    .max(20, "Password is too long !")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      "Password should contain at least one uppercase and one lowercase letter and a number too !"
    ),
  passwordConfirmation: Yup.string()
    .required("This field is required")
    .oneOf([Yup.ref("password"), null], "Passwords do not match !"),
});

export default function SinginForm() {
  const { isDark }: any = useContext(ThemeContext);
  const navigate = useNavigate();
  const [doUserExist, setDoUserExist] = useState<boolean>(false);

  const onSubmit = (values: ValuesObj) => {
    const postURL = "http://localhost:5174/api/users";
    axios
      .get(postURL)
      .then((res) => {
        const userMatched = checkSinginData(values, res.data);
        if (userMatched.length === 0) {
          setDoUserExist(false);
          sendAccountFormData(values);
          navigate("/login");
        } else {
          setDoUserExist(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <Header>Singin</Header>

          {doUserExist && (
            <StyledErrorMessage>
              <AlreadyExistError>Email address taken</AlreadyExistError>
            </StyledErrorMessage>
          )}
          <Label htmlFor="fullName">
            Full Name
            <ObligatoryStar />
          </Label>
          <StyledField
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Tim Johnson"
          />
          <StyledErrorMessage>
            <ErrorMessage name="fullName" />
          </StyledErrorMessage>

          <Label htmlFor="email">
            Email
            <ObligatoryStar />
          </Label>
          <StyledField
            type="email"
            id="email"
            name="email"
            placeholder="your.email@gmail.com"
          />
          <StyledErrorMessage>
            <ErrorMessage name="email" />
          </StyledErrorMessage>

          <Label htmlFor="password">
            Password
            <ObligatoryStar />
          </Label>
          <StyledField
            type="password"
            id="password"
            name="password"
            placeholder="SupeRstrOngPass4763"
          />
          <StyledErrorMessage>
            <ErrorMessage name="password" />
          </StyledErrorMessage>

          <Label htmlFor="passwordConfirmation">
            Confirm Password
            <ObligatoryStar />
          </Label>
          <StyledField
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="SupeRstrOngPass4763"
          />
          <StyledErrorMessage>
            <ErrorMessage name="passwordConfirmation" />
          </StyledErrorMessage>
          <FormButton buttonOrder="first" buttonText="Singin" />

          <CenteredSmallSpan text="Already have an account?" />
          <Link to="/login">
            <FormButton buttonOrder="second" buttonText="Login" />
          </Link>
        </StyledForm>
      </Formik>
    </ThemeProvider>
  );
}
