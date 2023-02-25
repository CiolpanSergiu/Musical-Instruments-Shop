import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import uniqueCategorySuggestions from "../../data/suggestions/categoriesSugestions";
import { useState, useEffect } from "react";
import filterFirstFiveSuggestions from "../../functions/search-suggestions-functions/filterSearchSuggestions";
import createSuggestionsList from "../../functions/search-suggestions-functions/createSearchSuggestionsLinks";
import SuggestionsModal from "./SuggestionsModal";
import uniqueBrandsSuggestions from "../../data/suggestions/brandsSuggestions";
import uniqueProducts from "../../data/suggestions/productsSuggestions";

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2rem;
  align-items: center;
  border: solid black 1px;
`;

const Input = styled.input`
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

const ModalInput = styled(Input)`
  position: absolute;
  left: 10%;
  top: 10%;
  height: 2.5rem;
  width: 80%;
  background-color: lightgray;
  color: black;
  padding-left: 0.5rem;
  border-radius: 6px;

  @media only screen and (max-width: 667px) {
    display: none;
  }
`;

const LoopIconSpan = styled.span`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px 0 0 5px;
  height: 100%;
  padding: 0 0.5rem;
`;

const ClearSearchBoxBtn = styled.button`
  font-size: 1.2rem;
  background-color: white;
  height: 100%;
  border: none;
  padding: 0 0.5rem;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
`;

const ModalExitBtn = styled.button`
  padding: 0.5rem 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export default function NavbarSearchBox() {
  const [searchBoxValue, setSearchBoxValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchBoxValue(event.target.value);
  }

  function clearSearchBox(): void {
    setSearchBoxValue("");
  }

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
  }

  const filteredCategorySuggestions = filterFirstFiveSuggestions(
    uniqueCategorySuggestions,
    searchBoxValue
  );

  const filteredBrandsSuggestions = filterFirstFiveSuggestions(
    uniqueBrandsSuggestions,
    searchBoxValue
  );

  const filteredProductsSuggestions = filterFirstFiveSuggestions(
    uniqueProducts,
    searchBoxValue
  );

  const categorySuggestionsList = createSuggestionsList(
    filteredCategorySuggestions,
    clearSearchBox
  );

  const brandsSuggestionsList = createSuggestionsList(
    filteredBrandsSuggestions,
    clearSearchBox
  );

  const productsSuggestionsList = createSuggestionsList(
    filteredProductsSuggestions,
    clearSearchBox
  );

  const currentSuggestionsLength = categorySuggestionsList
    .filter((suggestion) => suggestion)
    .concat(brandsSuggestionsList.filter((suggestion) => suggestion))
    .concat(productsSuggestionsList.filter((suggestion) => suggestion)).length;

  useEffect(() => {
    document.body.style.overflow =
      currentSuggestionsLength > 0 ? "hidden" : "scroll";
  }, [searchBoxValue]);

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <LoopIconSpan>
        <BsSearch />
      </LoopIconSpan>
      <Input
        placeholder="Search"
        onChange={handleChange}
        value={searchBoxValue}
      />
      <ClearSearchBoxBtn onClick={clearSearchBox}>X</ClearSearchBoxBtn>
      <SuggestionsModal
        haveSuggestions={currentSuggestionsLength > 0}
        categorySuggestionsList={categorySuggestionsList}
        brandsSuggestionsList={brandsSuggestionsList}
        productsSuggestionsList={productsSuggestionsList}
      >
        <ModalExitBtn onClick={clearSearchBox}>X</ModalExitBtn>
        <ModalInput
          placeholder="Search"
          onChange={handleChange}
          value={searchBoxValue}
        />
      </SuggestionsModal>
    </Form>
  );
}
