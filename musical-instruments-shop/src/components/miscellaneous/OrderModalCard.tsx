import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  align-items: center;
  background-color: white;
  margin: 1rem 2rem;
  padding-bottom: 2rem;
  border-bottom: solid lightgray 3px;
`;

const ColumnFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const Image = styled.img`
  width: 90px;
`;

type Props = {
  src: string;
  alt: string;
  title: string;
  quantity: number;
  price: number;
};

export default function OrderModalCard({
  src,
  alt,
  title,
  price,
  quantity,
}: Props) {
  return (
    <Card>
      <Image src={src} alt={alt} />
      <ColumnFlexContainer>
        <h3>{title}</h3>
        <span>Quantity: {quantity}</span>
      </ColumnFlexContainer>
      <ColumnFlexContainer>
        <span>Total Price: </span>
        <span>{quantity * price}$</span>
      </ColumnFlexContainer>
    </Card>
  );
}
