import styled from "styled-components";
const OverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.8;
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
`;

type Props = {
  handleClose: () => void;
};

export default function Overlay({ handleClose }: Props) {
  return <OverlayContainer onClick={handleClose}></OverlayContainer>;
}
