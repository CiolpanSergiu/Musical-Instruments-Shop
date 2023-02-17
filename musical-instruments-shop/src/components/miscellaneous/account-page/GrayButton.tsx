import styled from "styled-components";

type StyledBtnProps = {
  padding?: string;
  width?: string;
};

const StyledBtn = styled.button<StyledBtnProps>`
  background-color: gray;
  color: white;
  border: none;
  padding: ${(props) => props.padding || "0.25rem 1rem"};
  cursor: pointer;
  width: ${(props) => props.width || "auto"};
  transition: 0.3s all ease;
  font-size: 1.1rem;

  &:hover {
    background-color: #555555;
  }
`;

type Props = {
  contentText: string;
  padding?: string;
  width?: string;
  handleClick: () => void;
};

export default function GrayButton({
  contentText,
  padding,
  width,
  handleClick,
}: Props) {
  return (
    <StyledBtn padding={padding} width={width} onClick={handleClick}>
      {contentText}
    </StyledBtn>
  );
}
