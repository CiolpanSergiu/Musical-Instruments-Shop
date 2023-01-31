import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  height: 2rem;
  padding-left: 0.25rem;
  width: 100%;
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

function handleClick(e: any) {
  e.preventDefault();
}

export default function NavbarSearchBox() {
  return (
    <Form onSubmit={(e) => handleClick(e)}>
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
