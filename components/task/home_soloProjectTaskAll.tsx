import { styled } from "styled-components";
import HomeSoloProjectTaskList from "./home_project_task_list";

type Props = {
  // eslint-disable-next-line
  projectData: any;
};

const DivTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const HomeSoloProjectTaskAll = (props: Props) => {
  const projectData = props.projectData;
  const projectTitle = projectData.name;
  const projectTasks = projectData.tasks;
  return (
    <>
      <DivTitle>{projectTitle}</DivTitle>
      <HomeSoloProjectTaskList projectTasks={projectTasks} />
    </>
  );
};

export default HomeSoloProjectTaskAll;
