"use client";

import { styled } from "styled-components";
import { useState } from "react";
import { InputTextOrigin } from "./htmlOriginElements";
import FormQuestionChild from "./form_question_child";
import { userChildTask, userTask } from "./types";

const DivForm = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid var(--color_theme_line);
`;

const LabelText = styled.p`
  font-size: 14px;
  color: gray;
`;

const LineDivider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--color_theme_line);
  margin: 30px 0;
`;

const FormQuestions = () => {
  const [userTask, setUserTask] = useState<userTask>({
    title: "始発電車ルーティン",
    tasks: [{ name: "子要素のタイトル", routineIndex: 0, timeType: "week" }],
  });

  const handleRoutineChange = (row: number, handleUserTask: userChildTask) => {
    const newTasks = userTask.tasks.map((userChildTask, index) => {
      if (row === index) return handleUserTask;
      return userChildTask;
    });

    const newUserTask = { ...userTask, tasks: newTasks };
    setUserTask(newUserTask);
  };

  const handleTitleChange = (title: string) => {
    const newUserTask = { ...userTask, title: title };
    setUserTask(newUserTask);
  };

  return (
    <DivForm>
      <div>
        <LabelText>タスクのタイトル</LabelText>
        <InputTextOrigin
          $fontSize={20}
          type="text"
          placeholder="タスク名"
          value={userTask.title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
      </div>
      <LineDivider />
      <LabelText>タスクの子プロセス</LabelText>
      {userTask.tasks.map((userChildTask, index) => {
        return (
          <FormQuestionChild
            key={index}
            userChildTask={userChildTask}
            setUserChildTask={(userChildTask) =>
              handleRoutineChange(index, userChildTask)
            }
          />
        );
      })}
      <button>送信する</button>
    </DivForm>
  );
};

export default FormQuestions;
