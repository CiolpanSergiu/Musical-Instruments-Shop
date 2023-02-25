import styled from "styled-components";

type SuggestionContainerProps = {
  haveSuggestions: boolean;
};

// 100vh - 100% where 100% represent navbar height
const SuggestionsContainer = styled.div<SuggestionContainerProps>`
  display: ${(props) => (props.haveSuggestions ? "flex" : "none")};
  flex-direction: column;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: ${(props) => (props.haveSuggestions ? "100vh" : "0")};
  padding: ${(props) => (props.haveSuggestions ? "3rem 2rem 15rem 2rem" : "0")};
  overflow-y: scroll;

  @media only screen and (min-width: 667px) {
    width: 60vw;
    left: 20vw;
    height: 90vh;
    top: 5vh;
    border-radius: 9px;
    border: solid gray 2px;
    align-items: flex-start;
    padding-left: 6%;
    padding-bottom: 5rem;
    padding-top: 7.5rem;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ModalHeader = styled.h2`
  padding: 0.5rem 0;
`;

const DefaultText = styled.p`
  font-size: 1.1rem;
  color: gray;
`;

type Props = {
  haveSuggestions: boolean;
  categorySuggestionsList: (JSX.Element | undefined)[];
  brandsSuggestionsList: (JSX.Element | undefined)[];
  productsSuggestionsList: (JSX.Element | undefined)[];
  children: any;
};

export default function ({
  haveSuggestions,
  categorySuggestionsList,
  brandsSuggestionsList,
  productsSuggestionsList,
  children,
}: Props) {
  return (
    <SuggestionsContainer haveSuggestions={haveSuggestions}>
      {children}
      <ModalHeader>Categories</ModalHeader>
      {categorySuggestionsList.length === 0 && (
        <DefaultText>No categories found!</DefaultText>
      )}
      {categorySuggestionsList}
      <ModalHeader>Items</ModalHeader>
      {productsSuggestionsList.length === 0 && (
        <DefaultText>No categories found!</DefaultText>
      )}
      {productsSuggestionsList}
      <ModalHeader>Brands</ModalHeader>
      {brandsSuggestionsList.length === 0 && (
        <DefaultText>No brands found!</DefaultText>
      )}
      {brandsSuggestionsList}
    </SuggestionsContainer>
  );
}
