import styled from "styled-components";
import ShoppingPageCard from "../cards/ShoppingPageCard";
import { nanoid } from "nanoid";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Container = styled.div`
  display: grid;
  gap: 2rem;
  padding-top: 4rem;
  width: 100%;

  @media only screen and (min-width: 667px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } ;
`;

const PageHeader = styled.h1`
  text-align: center;
  margin-top: 3rem;
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

type Props = {
  pageTitle: string;
  itemsData: {
    title: string;
    srcThumbnail: string;
    srcBig: string;
    alt: string;
    pageLink: string;
    price: number;
    avaible: boolean;
    rating: number;
    totalReviews: number;
  }[];
};

export default function ShoppingPageContainer({ pageTitle, itemsData }: Props) {
  const cards = itemsData.map((card: any) => {
    return (
      <ShoppingPageCard
        key={nanoid()}
        title={card.title}
        srcThumbnail={card.srcThumbnail}
        alt={card.alt}
        pageLink={card.pageLink}
        rating={card.rating}
        price={card.price}
      />
    );
  });

  // const [items, setItems] = useState<Props["itemsData"]>();

  // let cards;

  // if (items !== undefined) {
  //   cards = items.map((card: any) => {
  //     return (
  //       <ShoppingPageCard
  //         key={nanoid()}
  //         title={card.title}
  //         srcThumbnail={card.srcThumbnail}
  //         alt={card.alt}
  //         pageLink={card.pageLink}
  //         rating={card.rating}
  //         price={card.price}
  //       />
  //     );
  //   });
  // } else {
  //   cards = itemsData.map((card: any) => {
  //     return (
  //       <ShoppingPageCard
  //         key={nanoid()}
  //         title={card.title}
  //         srcThumbnail={card.srcThumbnail}
  //         alt={card.alt}
  //         pageLink={card.pageLink}
  //         rating={card.rating}
  //         price={card.price}
  //       />
  //     );
  //   });
  // }

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5174/api/items")
  //     .then((res) => setItems(res.data));
  // }, []);

  // console.log(items);

  return (
    <>
      <PageHeader>{pageTitle}</PageHeader>
      <Container>{cards}</Container>
    </>
  );
}
