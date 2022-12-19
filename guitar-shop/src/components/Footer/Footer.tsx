import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import PhoneNumber from "../Miscellaneous/PhoneNumber";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";

type Theme = {
  isDark: boolean;
};

const FooterContainer = styled.footer<Theme>`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.isDark ? "#3d4552" : "white")};
  margin-top: 3rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 15px 3px lightgray;
`;

const SocialIconsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 640px) {
    width: 100%;
  }
`;

const StyledLinkRouter = styled(Link)<Theme>`
  color: ${(props) => (props.isDark ? "white" : "#3d4552")};
  text-decoration: none;
  margin: 0.5rem 0;
`;

const Email = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const Icon = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

export default function Footer() {
  const { darkTheme }: any = useContext(ThemeContext);

  return (
    <FooterContainer isDark={darkTheme}>
      <SocialIconsContainer>
        <StyledLinkRouter to="" isDark={darkTheme}>
          <Icon>
            <BsFacebook />
          </Icon>
        </StyledLinkRouter>
        <StyledLinkRouter to="" isDark={darkTheme}>
          <Icon>
            <BsLinkedin />
          </Icon>
        </StyledLinkRouter>
        <StyledLinkRouter to="" isDark={darkTheme}>
          <Icon>
            <BsYoutube />
          </Icon>
        </StyledLinkRouter>
        <PhoneNumber />
        <StyledLinkRouter to="/contact" isDark={darkTheme}>
          <Icon>
            <MdEmail />
            <Email>not.real.email@gmail.com</Email>
          </Icon>
        </StyledLinkRouter>
      </SocialIconsContainer>
    </FooterContainer>
  );
}
