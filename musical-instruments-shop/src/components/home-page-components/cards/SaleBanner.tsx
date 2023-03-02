import styled from "styled-components";

type Props = {
  imgSrc: string;
  alt: string;
  title: string;
};

const Card = styled.div`
  display: grid;
  grid-template-rows: 2fr 6rem;
`;

const Image = styled.img`
  border-radius: 9px;
  width: 100%;
  height: auto;
`;

const Header = styled.h2`
  width: 100%;
  height: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 9px;
  font-weight: 600;
  font-size: 1.2rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.6rem;
  } ;
`;

export default function SaleBanner({ imgSrc, alt, title }: Props) {
  return (
    <Card>
      <Image src={imgSrc} alt={alt} />
      <Header>{title}</Header>
    </Card>
  );
}
