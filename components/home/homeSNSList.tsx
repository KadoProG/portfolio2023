"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export type SNSList = {
  title: string;
  url?: string;
  image: string;
};

type Props = {
  snsList: SNSList[];
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeSNSList = (props: Props) => {
  const snsList = props.snsList;

  return (
    <Div>
      {snsList.map((data, index) => {
        return <HomeSNSItem data={data} key={index} />;
      })}
    </Div>
  );
};

export default HomeSNSList;

type ItemProps = {
  data: SNSList;
};

const LinkOrigin = styled(Link)`
  margin: 10px 30px;
  cursor: pointer;
  transition: 0.2s;
  width: 64px;
  height: 64px;
  &:hover {
    background: #ffffff9d;
  }
  & img {
    border: 1px solid black;
  }
`;
const DivItem = styled.div`
  margin: 10px 30px;
  opacity: 0.3;
  & img {
    border: 1px solid black;
  }
`;

const HomeSNSItem = (props: ItemProps) => {
  const data = props.data;

  if (data.url) {
    return (
      <LinkOrigin href={data.url} target={"_blank"}>
        <Image
          src={data.image}
          alt={data.title + "の画像"}
          width={64}
          height={64}
        />
      </LinkOrigin>
    );
  } else {
    return (
      <DivItem>
        <Image
          src={data.image}
          alt={data.title + "の画像"}
          width={64}
          height={64}
        />
      </DivItem>
    );
  }
};
