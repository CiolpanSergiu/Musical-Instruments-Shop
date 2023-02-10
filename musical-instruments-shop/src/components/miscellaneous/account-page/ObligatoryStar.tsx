import styled from "styled-components";

const ObligatoryStarSpan = styled.span`
  color: #e36f75;
  margin-left: 3px;
`;

export default function ObligatoryStar() {
  return <ObligatoryStarSpan>*</ObligatoryStarSpan>;
}
