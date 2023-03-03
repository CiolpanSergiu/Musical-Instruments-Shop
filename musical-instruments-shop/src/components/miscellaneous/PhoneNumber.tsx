import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
import { ThemeProvider } from "styled-components";
import themes from "../../colors-and-themes/themes";

const TelephoneIcon = styled.span`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  transition: 0.3s;
`;

const TelephoneNumber = styled.span`
  font-size: 1.1rem;
  margin-left: 0.5rem;
`;

const StyledLinkRouter = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export default function PhoneNumber() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <StyledLinkRouter to="/contact">
        <TelephoneIcon>
          <BsFillTelephoneFill />
          <TelephoneNumber>+0123 456 789</TelephoneNumber>
        </TelephoneIcon>
      </StyledLinkRouter>
    </ThemeProvider>
  );
}
