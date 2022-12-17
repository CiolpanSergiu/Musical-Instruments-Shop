import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;

const Input = styled.input`
  height: 2rem;
  padding-left: 0.25rem;
  width: 100%;

  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

const Button = styled.button`
  height: 2rem;
  padding: 0 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const Span = styled.span`
  background-color: white;
  display: flex;
  align-items: center;
  height: 1.9rem;
  border-radius: 5px 0 0 5px;
  padding: 0 0.5rem;
`;

export default function NavbarSearchBox() {
  return (
    <Form>
      <Span className="search-box__search-icon nav-icon">
        <BsSearch />
      </Span>
      <Input
        className="search-box__input"
        type="text"
        placeholder="Searching something specific?"
      />
      <Button className="search-box__button">Search</Button>
    </Form>
  );
}
