import { styled } from "styled-components";
import { ButtonOrigin, InputTextOrigin } from "./htmlOriginElements";
import FormQuestionRoutine from "./form_question_routine";
import FormQuestionTime from "./form_question_time";
import { userChildTask, userChildTaskTimeType } from "./types";

const SelectTaskRoutines = styled.select`
  font-size: 16px;
  line-height: 30px;
  height: 30px;
`;

type Props = {
  userChildTask: userChildTask;
  taskCount: number;
  setUserChildTask(newUserTask: userChildTask): void;
  deleteUserChildTask(): void;
};

const DivFormQuestionChild = styled.div`
  padding-left: 10px;
  border-left: 2px solid gray;
  margin: 10px;
`;

const DivFormQuestionChildTitle = styled.div`
  display: flex;
  padding: 10px 0;
  & > span {
    font-size: 14px;
    margin-right: 4px;
  }
`;

const FormQuestionChild = (props: Props) => {
  const userChildTask = props.userChildTask;
  const taskCount = props.taskCount;
  const taskRoutines: { name: string; timeType: userChildTaskTimeType }[] = [
    // { name: "プロセス単位", question: ["何のタスクで"] },
    // { name: "日単位", question: ["何日に◯回", ""] },
    { name: "週単位", timeType: "week" },
    { name: "週確定", timeType: "weekConfirm" },
    // { name: "月単位" },
    // { name: "年単位" },
  ];

  const handleRoutineChange = (newRoutineIndex: number) => {
    const newUserChildTask: userChildTask = {
      ...userChildTask,
      routineIndex: newRoutineIndex,
      timeType: taskRoutines[newRoutineIndex].timeType,
    };
    props.setUserChildTask(newUserChildTask);
  };

  const handleRoutineChangeName = (handleName: string) => {
    const newUserChildTask = { ...userChildTask, name: handleName };
    props.setUserChildTask(newUserChildTask);
  };

  const handleChildTask = (userChildTask: userChildTask) => {
    props.setUserChildTask(userChildTask);
  };

  const handleDeleteClick = () => {
    props.deleteUserChildTask();
  };

  return (
    <DivFormQuestionChild>
      <DivFormQuestionChildTitle>
        <span>{taskCount + 1}</span>
        <ButtonOrigin
          $width={80}
          $height={20}
          $fontSize={14}
          $inline={false}
          onClick={handleDeleteClick}
        >
          削除する
        </ButtonOrigin>
      </DivFormQuestionChildTitle>
      <DivFormQuestionChildTitle>
        <SelectTaskRoutines
          onChange={(e) => handleRoutineChange(e.target.selectedIndex)}
        >
          {taskRoutines.map((taskRoutine, index) => {
            return (
              <option key={index} value={index}>
                {taskRoutine.name}
              </option>
            );
          })}
        </SelectTaskRoutines>
        <InputTextOrigin
          type="text"
          placeholder="タスク名"
          value={userChildTask.name}
          onChange={(e) => handleRoutineChangeName(e.target.value)}
        />
      </DivFormQuestionChildTitle>

      <div>
        <FormQuestionRoutine
          index={userChildTask.routineIndex}
          userChildTask={userChildTask}
          setUserChildTask={(userChildTask) => handleChildTask(userChildTask)}
        />
        <FormQuestionTime />
      </div>
    </DivFormQuestionChild>
  );
};

export default FormQuestionChild;
