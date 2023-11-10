"use client";

import data from "../../../public/data.json";
import HeaderOrigin from "../../../components/header";
import { DivMain } from "../../../components/main";
import Main404 from "../../../components/home/404";
import HomeTypeList from "../../../components/contents/homeTypeList";

type Props = {
  params: { type: string };
};
const Home = (props: Props) => {
  const paramType = props.params.type;
  const product = data.homeCard.find((card) => card.root === paramType);
  const homeProduct = data.homeProduct;

  if (product === undefined) return <Main404 />;

  return (
    <>
      <HeaderOrigin />
      <DivMain>
        <h1>{product.title}</h1>
        <HomeTypeList homeProductList={homeProduct} />
      </DivMain>
    </>
  );
};

export default Home;
