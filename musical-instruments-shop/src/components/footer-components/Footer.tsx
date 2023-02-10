import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import PhoneNumber from "../miscellaneous/PhoneNumber";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

type FooterProps = {
  margintop?: string;
};

const FooterContainer = styled.footer<FooterProps>`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.bgColor};
  margin-top: ${(props) => (props.margintop ? props.margintop : 0)};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px gray;
  position: relative;
  bottom: 0;
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

const StyledLinkRouter = styled(Link)<FooterProps>`
  color: ${(props) => props.theme.color};
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

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

type Props = {
  marginTop?: string;
};

export default function Footer({ marginTop }: Props) {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <FooterContainer margintop={marginTop || "0"}>
        <SocialIconsContainer>
          <StyledLinkRouter to="">
            <Icon>
              <BsFacebook />
            </Icon>
          </StyledLinkRouter>
          <StyledLinkRouter to="">
            <Icon>
              <BsLinkedin />
            </Icon>
          </StyledLinkRouter>
          <StyledLinkRouter to="">
            <Icon>
              <BsYoutube />
            </Icon>
          </StyledLinkRouter>
          <PhoneNumber />
          <StyledLinkRouter to="/contact">
            <Icon>
              <MdEmail />
              <Email>not.real.email@gmail.com</Email>
            </Icon>
          </StyledLinkRouter>
        </SocialIconsContainer>
      </FooterContainer>
    </ThemeProvider>
  );
}
