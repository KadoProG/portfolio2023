"use client";

import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid black;
  width: calc(100% - 20px);
  max-width: 500px;
  margin: 10px auto;
  padding: 40px 10px;
  background: #ffffff9d;
  border-radius: 10px;
  /* font-size: 24px; */
`;

const ParamTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #aaa;
`;

const DivMiddle = styled.div`
  display: flex;
  align-items: center;
  & div {
    &:first-child {
      flex: 1;
      text-align: center;
    }
    &:last-child {
      display: flex;
      margin: 10px;
      border-radius: 64px;
      overflow: hidden;
    }
  }
`;

const ParamName = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const CardMyProfile = () => {
  return (
    <Div>
      <ParamTitle>日本大学工学部 情報工学科</ParamTitle>
      <DivMiddle>
        <div>
          <ParamName>角口 翔</ParamName>
          <p>Sho Kadoguchi</p>
        </div>
        <div>
          <Image
            src={"/images/myself_2022-04-22.jpg"}
            width={128}
            height={128}
            alt={"俺や"}
          />
        </div>
      </DivMiddle>
    </Div>
  );
};

export default CardMyProfile;
