import styled from "styled-components";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import PhoneNumber from "../Miscellaneous/PhoneNumber";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #3d4552;
  margin-top: 3rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const StyledLinkRouter = styled(Link)`
  color: white;
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
  return (
    <FooterContainer>
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
            <Email>ciolpan.sergiu64@gmail.com</Email>
          </Icon>
        </StyledLinkRouter>
      </SocialIconsContainer>
    </FooterContainer>
  );
}
