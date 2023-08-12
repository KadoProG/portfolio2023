"use client";

import Image from "next/image";
import styled from "styled-components";

const DivProfileCard = styled.div`
  border: 1px solid black;

  & > div {
    // 上
    &:first-child {
      display: flex;
    }

    // 下
    &:last-child {
    }
  }
`;

const ImgProfileImage = styled(Image)`
  object-fit: cover;
`;

const ProfileCard = () => {
  return (
    <DivProfileCard>
      <div>
        <ImgProfileImage
          src={"/myself_2022-04-22.jpg"}
          width={100}
          height={100}
          alt={"俺"}
        />
        <p>最長記録あああああ</p>
      </div>
      <div>
        <p>詳細が表示されます</p>
        <p>詳細が表示されます</p>
        <p>詳細が表示されます</p>
      </div>
    </DivProfileCard>
  );
};

export default ProfileCard;
