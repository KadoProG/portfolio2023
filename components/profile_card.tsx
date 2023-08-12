"use client";

import Image from "next/image";
import styled from "styled-components";

const DivProfileCard = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid var(--color_theme_line);

  & > div {
    // 上
    &:first-child {
      display: flex;
      & > div {
        // 画像のほう
        &:first-child {
          padding-right: 10px;
        }
        & p {
          font-size: 24px;
          &:first-child {
            font-weight: bold;
          }
        }
      }
    }

    // 下
    &:last-child {
      // 下のテキスト
      & > div {
        display: flex;
        justify-content: space-between;
        & > p {
          &:last-child {
            width: 100px;
          }
        }
      }
    }
  }
`;

const ImgProfileImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid var(--color_theme_text);
`;

const ProfileCard = () => {
  const data = [
    { do: "筋トレ", date: "1日" },
    { do: "始発電車ルーティン", date: "999日" },
    { do: "ああああああああああああ", date: "ooooo日" },
  ];
  return (
    <DivProfileCard>
      <div>
        <div>
          <ImgProfileImage
            src={"/myself_2022-04-22.jpg"}
            width={100}
            height={100}
            alt={"俺"}
          />
        </div>
        <div>
          <p>最長記録</p>
          <p>1年1ヶ月1日</p>
        </div>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.do}</p>
              <p>：{item.date}</p>
            </div>
          );
        })}
      </div>
    </DivProfileCard>
  );
};

export default ProfileCard;
