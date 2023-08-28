import HomeSoloProjectTaskItem from "./home_project_task_item";

type Props = {
  // eslint-disable-next-line
  projectTasks: any[];
};
const HomeSoloProjectTaskList = (props: Props) => {
  const projectTasks = props.projectTasks;
  return (
    <>
      {projectTasks.map((projectTask, index) => {
        return (
          <HomeSoloProjectTaskItem projectTask={projectTask} key={index} />
        );
      })}
    </>
  );
};

export default HomeSoloProjectTaskList;
