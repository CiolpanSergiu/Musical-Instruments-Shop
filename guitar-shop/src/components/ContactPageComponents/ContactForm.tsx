import styled from "styled-components";
import { useState } from "react";

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

const ObligatoryFieldStar = styled.div`
  color: red;
  position: absolute;
  right: -15px;
  top: 0;
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

const SubmitMessage = styled.span`
  color: black;
  background-color: lightskyblue;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  margin: 2rem;
`;

const InvalidEmail = styled.span`
  color: #540c1b;
  background-color: #ffabbd;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0 0 2rem 0;
`;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  additionalInfo: string;
};

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    additionalInfo: "",
  });

  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);

  function emptyInputBoxes() {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      additionalInfo: "",
    });
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setFormData((prevState: FormData) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (emailPattern.test(formData.email)) {
      setIsSubmited(true);
      setIsEmailInvalid(false);
      emptyInputBoxes();
      setTimeout(() => {
        setIsSubmited(false);
      }, 5 * 1000);
    } else {
      setIsEmailInvalid(true);
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <SubmitMessage style={{ display: isSubmited ? "block" : "none" }}>
          You message was submited!
        </SubmitMessage>
        <InputContainer>
          <Input
            id="first-name"
            required
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          ></Input>
          <Label htmlFor="first-name">
            <Span>
              First name
              <ObligatoryFieldStar>*</ObligatoryFieldStar>
            </Span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Input
            id="last-name"
            required
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          ></Input>
          <Label htmlFor="last-name">
            <Span>
              Last Name
              <ObligatoryFieldStar>*</ObligatoryFieldStar>
            </Span>
          </Label>
        </InputContainer>
        <InvalidEmail style={{ display: isEmailInvalid ? "block" : "none" }}>
          Invalid Email!
        </InvalidEmail>
        <InputContainer>
          <Input
            id="email"
            required
            onChange={handleChange}
            name="email"
            value={formData.email}
          ></Input>
          <Label htmlFor="email">
            <Span>
              Email
              <ObligatoryFieldStar>*</ObligatoryFieldStar>
            </Span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Input
            id="message"
            required
            onChange={handleChange}
            name="message"
            value={formData.message}
          ></Input>
          <Label htmlFor="message">
            <Span>
              Message
              <ObligatoryFieldStar>*</ObligatoryFieldStar>
            </Span>
          </Label>
        </InputContainer>
        <InputContainer>
          <Textarea
            id="additional-info"
            rows={10}
            placeholder="Want to give some additional info?"
            onChange={handleChange}
            name="additionalInfo"
            value={formData.additionalInfo}
          ></Textarea>
        </InputContainer>

        <Button>Submit</Button>
      </Form>
    </FormContainer>
  );
}
