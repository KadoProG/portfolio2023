"use client";

import HeaderOrigin from "../../components/header";
import HomeCardList, { HomeCard } from "../../components/home/homeCardList";
import HomeSNSList, { SNSList } from "../../components/home/homeSNSList";
import { DivMain } from "../../components/main";

const Home = () => {
  const snsList: SNSList[] = [
    {
      title: "X",
      url: "https://twitter.com/KadoUniversity",
      image: "/images/my_icon_x.png",
    },
    {
      title: "YouTube",
      image: "/images/my_icon_youtube.png",
    },
    {
      title: "Pixiv",
      image: "/images/my_icon_pixiv.png",
    },
    {
      title: "GitHub",
      url: "https://github.com/KadoProG",
      image: "/images/my_icon_github.png",
    },
    {
      title: "Portfolio",
      image: "/images/my_icon_myself.png",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/kado_universiry/",
      image: "/images/my_icon_instagram.png",
    },
  ];

  const homeCard: HomeCard[] = [
    {
      title: "制作物",
      subTitle: "PRODUCT",
      color: "#56e0ff",
      image: "/images/my_icon_product.png",
    },
    {
      title: "イベント",
      subTitle: "EVENT",
      color: "#56ff6a",
      image: "/images/my_icon_event.png",
    },
    {
      title: "ブログ",
      subTitle: "BLOG",
      color: "#edb8ff",
      image: "/images/my_icon_blog.png",
    },
    {
      title: "プロフィール",
      subTitle: "PROFILE",
      color: "#ffc297",
      image: "/images/my_icon_profile.png",
    },
  ];

  return (
    <>
      <HeaderOrigin />
      <DivMain>
        <HomeCardList homeCard={homeCard} />
        <HomeSNSList snsList={snsList} />
      </DivMain>
    </>
  );
};

export default Home;
