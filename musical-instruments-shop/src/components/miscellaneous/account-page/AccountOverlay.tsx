import styled from "styled-components";
const OverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  opacity: 0.3;
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.3s all ease;
`;

type Props = {
  handleClose: () => void;
};

export default function AccountOverlay({ handleClose }: Props) {
  return <OverlayContainer onClick={handleClose}></OverlayContainer>;
}
