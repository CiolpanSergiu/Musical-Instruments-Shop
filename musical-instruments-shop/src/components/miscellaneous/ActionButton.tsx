import styled from "styled-components";

type ButtonProps = {
  bgColor: {
    normal: string;
    hover: string;
  };
};

const StyledActionButton = styled.button<ButtonProps>`
  text-decoration: none;
  background-color: ${(props) => props.bgColor.normal};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 2rem;
  color: white;
  transition: 0.3s all ease;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.bgColor.hover};
  }
`;

type Props = {
  bgColor: {
    normal: string;
    hover: string;
  };
  buttonText: string;
  handleClick: () => void;
};

export default function ActionButton({
  bgColor,
  buttonText,
  handleClick,
}: Props) {
  return (
    <StyledActionButton bgColor={bgColor} onClick={handleClick}>
      {buttonText}
    </StyledActionButton>
  );
}
