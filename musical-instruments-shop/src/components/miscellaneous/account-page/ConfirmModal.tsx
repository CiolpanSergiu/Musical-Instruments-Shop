import GrayButton from "./GrayButton";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: white;
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr 1fr 1fr;
  position: fixed;
  text-align: center;
  width: 80%;
  z-index: 999;
  top: 25%;
  left: 10%;
  border-radius: 9px;
  border: solid gray 3px;
  padding: 4rem 2rem 2rem 2rem;

  @media only screen and (min-width: 662px) {
    width: 50%;
    left: 25%;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const CloseBtn = styled.span`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

type Props = {
  handleClose: () => void;
  handleDelete: () => void;
};

export default function ConfirmModal({ handleClose, handleDelete }: Props) {
  return (
    <ModalContainer>
      <Header>Are you sure about this?</Header>
      <CloseBtn onClick={handleClose}>X</CloseBtn>
      <GrayButton contentText="Yes" handleClick={handleDelete} />
      <GrayButton contentText="No" handleClick={handleClose} />
    </ModalContainer>
  );
}
