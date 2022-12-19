import styled from "styled-components";

type Props = {
  descriptionData: { title: string; subtitle: string; description: string[] };
};

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  background-color: #3d4552;
  border-radius: 9px;
  padding: 1rem;
  margin-top: 3rem;
`;

const MainHeader = styled.h2`
  color: lightskyblue;
  margin-bottom: 1rem;
`;

const Subheader = styled.h3`
  margin-bottom: 1rem;
`;

export default function SliderDescription({ descriptionData }: Props) {
  return (
    <DescriptionContainer>
      <MainHeader>{descriptionData.title}</MainHeader>
      <Subheader>{descriptionData.subtitle}</Subheader>
      <p>{descriptionData.description.join("")}</p>
    </DescriptionContainer>
  );
}
