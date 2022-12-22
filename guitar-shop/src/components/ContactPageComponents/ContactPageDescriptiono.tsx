import styled from "styled-components";
import ContactProgramTable from "./ContactProgramTable";
import { ThemeProvider } from "styled-components";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeProvider";

const DetailsContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100%;
  height: 100%;
  padding: 2rem;
  color: ${(props) => props.theme.color};

  @media only screen and (min-width: 480px) {
    padding: 3rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.titleColor};
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ShortInfo = styled.p`
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 5rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: lightskyblue;
`;

const Ul = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const darkTheme = {
  titleColor: "lightskyblue",
  color: "white",
  bgColor: "#363c40",
};

const lightTheme = {
  titleColor: "dodgerblue",
  color: "black",
  bgColor: "white",
};

export default function ContactPageDetails() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <DetailsContainer>
        <MainTitle>Need help of any kind ?</MainTitle>
        <Subtitle>Contact Us Now!</Subtitle>
        <Ul>
          <Li>
            <Dot />
            Encountered a problem on our site ?
          </Li>
          <Li>
            <Dot />
            Need help in deciding your instrument ?
          </Li>
          <Li>
            <Dot />
            Need an answer to a question ?
          </Li>
        </Ul>
        <ShortInfo>
          We value our (future) customers as much as much as we value music. On
          this page you can get in touch with us if you encounter any of the
          above problems.
        </ShortInfo>
        <ContactProgramTable />
      </DetailsContainer>
    </ThemeProvider>
  );
}
