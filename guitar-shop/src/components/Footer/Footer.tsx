import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import PhoneNumber from "../Miscellaneous/PhoneNumber";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";

type FooterProps = {
  isdark: boolean;
  margintop?: string;
};

const FooterContainer = styled.footer<FooterProps>`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.isdark ? "#3d4552" : "white")};
  margin-top: ${(props) => (props.margintop ? props.margintop : 0)};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px 5px lightgray;
  position: relative;
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
  color: ${(props) => (props.isdark ? "white" : "#3d4552")};
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

type Props = {
  marginTop?: string;
};

export default function Footer({ marginTop }: Props) {
  const { darkTheme }: any = useContext(ThemeContext);

  return (
    <FooterContainer isdark={darkTheme} margintop={marginTop || "0"}>
      <SocialIconsContainer>
        <StyledLinkRouter to="" isdark={darkTheme}>
          <Icon>
            <BsFacebook />
          </Icon>
        </StyledLinkRouter>
        <StyledLinkRouter to="" isdark={darkTheme}>
          <Icon>
            <BsLinkedin />
          </Icon>
        </StyledLinkRouter>
        <StyledLinkRouter to="" isdark={darkTheme}>
          <Icon>
            <BsYoutube />
          </Icon>
        </StyledLinkRouter>
        <PhoneNumber />
        <StyledLinkRouter to="/contact" isdark={darkTheme}>
          <Icon>
            <MdEmail />
            <Email>not.real.email@gmail.com</Email>
          </Icon>
        </StyledLinkRouter>
      </SocialIconsContainer>
    </FooterContainer>
  );
}
