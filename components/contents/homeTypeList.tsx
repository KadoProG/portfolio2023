import Image from "next/image";
import styled from "styled-components";

export type HomeProduct = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  homeProductList: HomeProduct[];
};

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  @media screen and (min-width: 680px) {
    flex-wrap: wrap;
  }
`;

const HomeTypeList = (props: Props) => {
  const homeProductList = props.homeProductList;
  return (
    <Div>
      {homeProductList.map((item, index) => {
        return <HomeProductItem key={index} homeProduct={item} />;
      })}
    </Div>
  );
};

export default HomeTypeList;

type HomeProductItemProps = {
  homeProduct: HomeProduct;
};

const DivItem = styled.div`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  /* width: 100%; */
  background: var(--color_theme_back);
  display: flex;
  & > div {
    &:first-child {
      & img {
        width: 100%;
      }
    }
    &:last-child {
      flex: 1;
    }
  }
`;

const HomeProductItem = (props: HomeProductItemProps) => {
  const homeProduct = props.homeProduct;
  return (
    <DivItem>
      <div>
        <Image
          src={homeProduct.image}
          alt={"あああああああああ"}
          width={30}
          height={30}
        />
      </div>
      <div>
        <p>{homeProduct.title}</p>
        <p>{homeProduct.description}</p>
      </div>
    </DivItem>
  );
};
