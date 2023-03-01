import styled from "styled-components";

type ButtonProps = {
  bgColor: {
    normal: string;
    hover: string;
  };
  padding: string;
  margin: string;
  isDisabled: boolean;
};

const StyledActionButton = styled.button<ButtonProps>`
  text-decoration: none;
  background-color: ${(props) => props.bgColor.normal};
  border: none;
  border-radius: 5px;
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.isDisabled ? "none" : "auto")};
  opacity: ${(props) => (props.isDisabled ? "0.5" : "1")};
  margin: ${(props) => props.margin};
  color: white;
  transition: 0.3s all ease;
  text-decoration: none;
  color: white;

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
  padding?: string;
  margin?: string;
  isDisabled?: boolean;
};

export default function ActionButton({
  bgColor,
  buttonText,
  handleClick,
  padding,
  margin,
  isDisabled,
}: Props) {
  return (
    <StyledActionButton
      bgColor={bgColor}
      padding={padding ? padding : ".5rem 2rem"}
      margin={margin ? margin : "0"}
      isDisabled={isDisabled ? true : false}
      onClick={handleClick}
    >
      {buttonText}
    </StyledActionButton>
  );
}
