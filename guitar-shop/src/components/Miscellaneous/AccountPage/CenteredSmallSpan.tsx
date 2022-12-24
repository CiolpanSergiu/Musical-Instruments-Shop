import styled from "styled-components";

const CenteredSpan = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;

type Props = {
  text: string;
};

export default function CenteredSmallSpan({ text }: Props) {
  return <CenteredSpan>{text}</CenteredSpan>;
}
