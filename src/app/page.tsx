"use client";

import data from "../../public/data.json";
import CardMyProfile from "../../components/card/myprofile";
import HeaderOrigin from "../../components/header";
import HomeCardList, { HomeCard } from "../../components/home/homeCardList";
import HomeSNSList, { SNSList } from "../../components/home/homeSNSList";
import { DivMain } from "../../components/main";
import { marked } from "marked";

const Home = () => {
  // JSONからデータを取得
  const snsList: SNSList[] = data.snsList;
  const homeCard: HomeCard[] = data.homeCard;

  const markdown =
    "# heading\n" +
    "## list\n" +
    "- list1\n" +
    "- list2\n\n" +
    "## code\n" +
    "```js\n" +
    "let x = 1;\n" +
    "```\n" +
    "## table\n" +
    "| col1 | col2 |\n" +
    "---|---\n" +
    "abc|123\n" +
    "xyz|456\n" +
    "- こんにちは\n" +
    "- こんにちは\n" +
    "  - こんにちは\n" +
    "  - こんにちは\n" +
    "- こんにちは";

  console.log(marked(markdown));

  return (
    <>
      <HeaderOrigin />
      <DivMain>
        <HomeCardList homeCard={homeCard} />
        <HomeSNSList snsList={snsList} />
        <CardMyProfile />
      </DivMain>
    </>
  );
};

export default Home;
