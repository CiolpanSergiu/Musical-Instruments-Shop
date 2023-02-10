import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  linkText: string;
  pageLink: string;
  handleClick: () => void;
};

const StyledSugestionLink = styled.span`
  color: black;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  transition: 0.3s all ease;
  display: block;
  width: 100%;

  &:hover {
    text-decoration: underline lightskyblue 3px;
  }
`;

export default function SuggestionLink({
  linkText,
  pageLink,
  handleClick,
}: Props) {
  const navigate = useNavigate();

  function handleMultipleClickEvents() {
    navigate(pageLink);
    handleClick();
  }

  return (
    <StyledSugestionLink role="link" onClick={handleMultipleClickEvents}>
      {linkText}
    </StyledSugestionLink>
  );
}
