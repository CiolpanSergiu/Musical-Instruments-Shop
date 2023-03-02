import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themes from "../../../colors-and-themes/themes";

const StyledFormButton = styled.button`
  font-size: 1.2rem;
  margin: 1rem auto;
  padding: 0.5rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  border: solid 1px gray;
  border-radius: 5px;
  cursor: pointer;
`;

type Props = {
  buttonOrder: string;
  buttonText: string;
};

export default function FormButton({ buttonOrder, buttonText }: Props) {
  return (
    <ThemeProvider
      theme={
        buttonOrder === "first" ? themes.formFirstBtn : themes.formSecondBtn
      }
    >
      <StyledFormButton type={buttonOrder === "first" ? "submit" : "button"}>
        {buttonText}
      </StyledFormButton>
    </ThemeProvider>
  );
}
