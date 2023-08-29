import { styled } from "styled-components";
import HomeSoloProjectTaskAll from "./home_soloProjectTaskAll";

type Props = {
  sort: "project" | "close";
};

const DivHomeTasks = styled.div`
  padding: 10px;
`;
const HomeTasks = (props: Props) => {
  const taskData = [
    {
      id: 1,
      name: "朝活",
      tasks: [
        {
          limit: 1,
          nowCount: 0,
          countType: {
            dayCount: { type: "日", 日: 1 },
            do: "button_click",
          },
          or: ["始発電車ルーティン", "自宅朝活7カフェ"],
        },
      ],
    },
    {
      id: 2,
      name: "筋トレ",
      tasks: [
        {
          limit: 3,
          nowCount: -3,
          countType: {
            dayCount: { type: "日", 日: 1 },
            do: "submit_url",
          },
          name: "腹筋",
        },
        {
          limit: 3,
          nowCount: 1,
          countType: {
            dayCount: { type: "日", 日: 1 },
            do: "submit_url",
          },
          name: "腕立て",
        },
        {
          limit: 1,
          nowCount: 0,
          countType: {
            dayCount: { type: "日", 日: 1 },
            do: "button_click",
          },
          or: ["HIIT", "サイクリング"],
        },
      ],
    },
  ];

  const sortedProjectAllData = props.sort === "project" ? taskData : taskData;

  return (
    <DivHomeTasks>
      {sortedProjectAllData.map((projectData, index) => {
        return <HomeSoloProjectTaskAll key={index} projectData={projectData} />;
      })}
    </DivHomeTasks>
  );
};
export default HomeTasks;
