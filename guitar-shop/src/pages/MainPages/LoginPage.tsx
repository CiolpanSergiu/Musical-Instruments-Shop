import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/AccountPageComponents/LoginForm";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.bgColor};
`;

const darkTheme = {
  bgColor: "#383838",
};

const lightTheme = {
  bgColor: "lightgray",
};

export default function LoginPage() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Navbar />
        <PageContainer>
          <LoginForm />
        </PageContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
}
