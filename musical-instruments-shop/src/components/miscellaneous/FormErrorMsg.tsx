import styled from "styled-components";

const CustomError = styled.span`
  color: #e36f75;
  display: block;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 1.125rem;
  margin-top: 0.5rem;
`;

type Props = {
  errorMsg: string;
};

export default function FormErrorMsg({ errorMsg }: Props) {
  return <CustomError>{errorMsg}</CustomError>;
}
