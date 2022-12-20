import styled from "styled-components";

const FormContainer = styled.div`
  background-color: white;
  width: 100%;
  padding: 4rem;
  justify-content: center;
  align-items: center;
  border-bottom: solid black 3px;

  @media only screen and (min-width: 768px) {
    border-bottom: none;
    border-right: solid gray 3px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  border: none;
  border-bottom: solid gray 3px;
  font-size: 1.1rem;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
    border-bottom: solid lightskyblue 3px;
  }

  &:focus + label span,
  &:valid + label span {
    transform: translateY(-25px);
    font-size: 0.8rem;
    color: lightskyblue;
  }
`;

const Textarea = styled.textarea`
  border-radius: 5px;
  margin-bottom: 1rem;
  transition: 0.3s;
  padding: 1rem;
  width: 100%;
  resize: vertical;
  font-size: 1.1rem;

  span {
  }

  &:focus {
    outline: solid lightskyblue 1px;
  }
`;

const Label = styled.label`
  pointer-events: none;
`;

const Span = styled.span`
  position: absolute;
  top: 15px;
  transition: 0.3s all ease;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  background-color: #3d4552;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    color: lightskyblue;
  }
`;

export default function ContactForm() {
  return (
    <FormContainer>
      <Form>
        <InputContainer>
          <Input id="first-name" required></Input>
          <Label htmlFor="first-name">
            <Span>First name</Span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Input id="last-name" required></Input>
          <Label htmlFor="last-name">
            <Span>Last Name</Span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Input id="email" required></Input>
          <Label htmlFor="email">
            <Span>Email</Span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Input id="message" required></Input>
          <Label htmlFor="message">
            <Span>Message</Span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Textarea
            id="additional-info"
            rows={10}
            placeholder="Want to give some additional info?"
          ></Textarea>
        </InputContainer>

        <Button>Submit</Button>
      </Form>
    </FormContainer>
  );
}
