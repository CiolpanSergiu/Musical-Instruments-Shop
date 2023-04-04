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
import axios from "axios";
import AuthentificationProvider from "../../context/AuthentificationContext";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { User } from "../../types/commonTypes";
import { updateCartTotalQuantity } from "../../functions/shopping-cart-functions/updateCartTotalQuantity";
import { updateItemsInCart } from "../../functions/shopping-cart-functions/updateItemsInCart";
import themes from "../../colors-and-themes/themes";
import { loginURL } from "../../variables/urls";

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  padding: 2rem;
  color: ${(props) => props.theme.color};
  border-radius: 9px;
  margin: 3rem 0;
  max-width: 90vw;
`;

const Header = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0 2rem 0;
`;

const StyledErrorMessage = styled.span`
  color: #e36f75;
  padding: 0.25rem 0 0.5rem 0;
  font-size: 0.8rem;
  max-width: 15rem;
  display: block;
`;

const IncorrectDataErrorMessage = styled(StyledErrorMessage)`
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

type Values = {
  email: string;
  password: string;
};

const initialValues: Values = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email formal")
    .required("This field is required !"),
  password: Yup.string()
    .required("This field is required !")
    .min(6, "Password is too short !")
    .max(20, "Password is too long !"),
});

export default function LoginForm() {
  const { isDark }: any = useContext(ThemeContext);

  const { setIsLoggedIn, setCurrentUser }: any = useContext(
    AuthentificationProvider
  );

  const { setCartItems, setCartItemsQuantity, setItemsInCart }: any =
    useContext(ShoppingCartContext);

  const [isLoginDataIncorrect, setIsLoginDataIncorrect] =
    useState<boolean>(false);

  const onSubmit = async (values: Values) => {
    const url = loginURL;
    await axios
      .post(url, values)
      .then((res) => {
        const user: User = res.data.user;
        setIsLoggedIn(true);
        setIsLoginDataIncorrect(false);
        setCurrentUser(user);
        setCartItems(user.shoppingCart);
        setCartItemsQuantity(updateCartTotalQuantity(user));
        setItemsInCart(updateItemsInCart(user.shoppingCart));
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
        setIsLoginDataIncorrect(true);
      });
  };

  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <Header>Login</Header>

          {isLoginDataIncorrect && (
            <StyledErrorMessage>
              <IncorrectDataErrorMessage>
                Incorrect login data
              </IncorrectDataErrorMessage>
            </StyledErrorMessage>
          )}
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
          <FormButton buttonOrder="first" buttonText="Login" />

          <CenteredSmallSpan text="Don't have an account?" />
          <Link to="/singin">
            <FormButton buttonOrder="second" buttonText="Singin" />
          </Link>
        </StyledForm>
      </Formik>
    </ThemeProvider>
  );
}
