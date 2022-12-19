import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";

const TelephoneIcon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  transition: 0.3s;
`;

const TelephoneNumber = styled.span`
  font-size: 0.9rem;
  margin-left: 0.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  } ;
`;

type Theme = {
  isDark: boolean;
};

const StyledLinkRouter = styled(Link)<Theme>`
  text-decoration: none;
  color: ${(props) => (props.isDark ? "white" : "#3d4552")};
`;

export default function PhoneNumber() {
  const { darkTheme }: any = useContext(ThemeContext);

  return (
    <StyledLinkRouter to="/contact" isDark={darkTheme}>
      <TelephoneIcon>
        <BsFillTelephoneFill />
        <TelephoneNumber>+0123 456 789</TelephoneNumber>
      </TelephoneIcon>
    </StyledLinkRouter>
  );
}
