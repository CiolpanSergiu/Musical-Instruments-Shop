import styled from "styled-components";
import { ThemeProvider } from "styled-components";

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

const firstButtonTheme = {
  bgColor: "#lightgray",
};
const secondButtonTheme = {
  bgColor: "lightskyblue",
};

type Props = {
  buttonOrder: string;
  buttonText: string;
};

export default function FormButton({ buttonOrder, buttonText }: Props) {
  return (
    <ThemeProvider
      theme={buttonOrder === "first" ? firstButtonTheme : secondButtonTheme}
    >
      <StyledFormButton type={buttonOrder === "first" ? "submit" : "button"}>
        {buttonText}
      </StyledFormButton>
    </ThemeProvider>
  );
}
