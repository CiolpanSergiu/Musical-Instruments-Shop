import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TelephoneIcon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
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
  color: white;
`;

export default function PhoneNumber() {
  return (
    <StyledLinkRouter to="/contact">
      <TelephoneIcon>
        <BsFillTelephoneFill />
        <TelephoneNumber>+0123 456 789</TelephoneNumber>
      </TelephoneIcon>
    </StyledLinkRouter>
  );
}
