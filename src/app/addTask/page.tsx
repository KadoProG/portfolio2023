"use client";

import HeaderOrigin from "../../../components/header";
import { DivMain } from "../../../components/main";
import FormQuestions from "../../../components/user/form_questions";

const Home = () => {
  return (
    <>
      <HeaderOrigin />
      <DivMain>
        <FormQuestions />
      </DivMain>
    </>
  );
};

export default Home;
