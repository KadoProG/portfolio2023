"use client";

import styled from "styled-components";

export type HomeCard = {
  title: string;
  subTitle: string;
  color: string;
  image: string;
};

type Props = {
  homeCard: HomeCard[];
};

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (min-width: 680px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const HomeCardList = (props: Props) => {
  const cardListData = props.homeCard;

  return (
    <Div>
      {cardListData.map((data, index) => {
        return <HomeCardItem key={index} cardData={data} />;
      })}
    </Div>
  );
};

export default HomeCardList;

type HomeCardItemProps = {
  cardData: HomeCard;
};

const HomeCardItem = (props: HomeCardItemProps) => {
  const cardData = props.cardData;
  return (
    <DivItem $color={cardData.color} $imagePath={cardData.image}>
      <div>
        <p>{cardData.title}</p>
        <p>{cardData.subTitle}</p>
      </div>
      <span></span>
    </DivItem>
  );
};

const DivItem = styled.div<{ $color: string; $imagePath: string }>`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  background: var(--color_theme_back);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.$color};
    opacity: 0.3;
    transition: 0.2s;
    transform: scale(0);
    border-radius: 50%;
  }
  & > div {
    & p {
      &:first-child {
        font-size: 36px;
        position: relative;
        font-family: yosugara;
        &::before {
          content: "";
          position: absolute;
          top: -10px;
          right: 0;
          width: 100%;
          height: 100%;
          background: url("${(props) => props.$imagePath}") right;
          background-repeat: no-repeat;
        }
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 16px;
          border-radius: 8px;
          background: ${(props) => props.$color};
        }
      }
      &:last-child {
        font-family: yosugara;
        padding-left: 10px;
        color: ${(props) => props.$color};
        font-weight: bold;
      }
    }
  }
  &:hover {
    &::after {
      transform: scale(1.5);
    }
  }
  @media screen and (min-width: 680px) {
    width: calc(50% - 20px);
    /* @media screen and (min-width: 1000px) {
        width: calc(100% / 3 - 20px);
      } */
  }
`;
