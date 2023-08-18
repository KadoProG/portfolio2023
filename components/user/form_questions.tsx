"use client";

import { styled } from "styled-components";
import FormQuestionRoutine from "./form_question_routine";
import { useState } from "react";
import FormQuestionTime from "./form_question_time";

const DivForm = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid var(--color_theme_line);
`;

const DivFormSection = styled.div`
  /* & > div { */
  display: flex;
  flex-wrap: wrap;
  /* } */
  & span {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const InputTextOrigin = styled.input<{
  $fontSize?: number;
  $width?: number;
}>`
  font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}px` : "16px")};
  width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
  border: 1px solid var(--color_theme_line);
  line-height: 30px;
  height: 30px;
`;

const SelectTaskRoutines = styled.select`
  font-size: 16px;
  line-height: 30px;
  height: 30px;
`;

const FormQuestions = () => {
  const [userTasks, setUserTasks] = useState([{ routineIndex: 0, title: "" }]);
  const taskRoutines = [
    { name: "プロセス単位", question: ["何のタスクで"] },
    { name: "日単位", question: ["何日に◯回", ""] },
    { name: "週単位" },
    { name: "週確定" },
    { name: "月単位" },
    { name: "年単位" },
  ];

  const handleRoutineChangeText = (row: number, newRoutineTitle: string) => {
    const newUserTasks = userTasks.map((userTask, index) => {
      if (row === index) {
        return { routineIndex: userTask.routineIndex, title: newRoutineTitle };
      }
      return userTask;
    });
    setUserTasks(newUserTasks);
  };

  const handleRoutineChange = (row: number, newRoutineIndex: number) => {
    const newUserTasks = userTasks.map((userTask, index) => {
      if (row === index) {
        return {
          routineIndex: newRoutineIndex,
          title: userTask.title,
        };
      }
      return userTask;
    });
    setUserTasks(newUserTasks);
  };

  return (
    <DivForm>
      <div>
        <p>タスクのタイトル</p>
        <InputTextOrigin $fontSize={20} type="text" placeholder="タスク名" />
      </div>

      <p>タスクの子プロセス</p>
      {userTasks.map((userTask, index) => {
        return (
          <DivFormSection key={index}>
            <SelectTaskRoutines
              onChange={(e) =>
                handleRoutineChange(index, e.target.selectedIndex)
              }
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
              $width={200}
              type="text"
              placeholder="タスク名"
              value={userTask.title}
              onChange={(e) => handleRoutineChangeText(index, e.target.value)}
            />

            <FormQuestionRoutine index={userTask.routineIndex} />
            <FormQuestionTime />
          </DivFormSection>
        );
      })}
    </DivForm>
  );
};

export default FormQuestions;
