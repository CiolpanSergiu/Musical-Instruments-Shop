import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
import { ThemeProvider } from "styled-components";

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

const StyledLinkRouter = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

export default function PhoneNumber() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StyledLinkRouter to="/contact">
        <TelephoneIcon>
          <BsFillTelephoneFill />
          <TelephoneNumber>+0123 456 789</TelephoneNumber>
        </TelephoneIcon>
      </StyledLinkRouter>
    </ThemeProvider>
  );
}
