import styled from "styled-components";
import ThemeContext from "../../context/ThemeProvider";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";

const UserMenuContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  position: absolute;
  width: 100%;
  height: 100vh;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
`;

const Header = styled.h2`
  margin-bottom: 5rem;
`;

const LoginButton = styled.button`
  text-align; center;
  width: 10rem;
  margin: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: dodgerblue;
  font-size: 1.2rem;
`;

const RegisterButton = styled(LoginButton)``;

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

export default function UserMenu() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <UserMenuContainer>
        <Header>Hello</Header>
        <LoginButton>Login</LoginButton>
        <RegisterButton>Register</RegisterButton>
      </UserMenuContainer>
    </ThemeProvider>
  );
}
