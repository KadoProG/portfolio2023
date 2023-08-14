"use client";

import Link from "next/link";
import HeaderOrigin from "../../components/header";
import { DivMain } from "../../components/main";
import BtnAddTask from "../../components/user/btnAddTask";
import ProfileCard from "../../components/user/profile_card";

const Home = () => {
  return (
    <>
      <HeaderOrigin />
      <DivMain>
        <ProfileCard />
        <Link href={"/addTask"}>
          <BtnAddTask />
        </Link>
      </DivMain>
    </>
  );
};

export default Home;
