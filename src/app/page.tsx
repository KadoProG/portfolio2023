"use client";

import { styled } from "styled-components";
import Header from "../../components/header";
import ProfileCard from "../../components/user/profile_card";

const DivMain = styled.div`
  margin-top: calc(var(--len__header__height) + 10px);
`;
const Home = () => {
  return (
    <>
      <Header />
      <DivMain>
        <ProfileCard />
      </DivMain>
    </>
  );
};

export default Home;
