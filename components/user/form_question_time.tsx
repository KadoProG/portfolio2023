import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { InputTextNum, SelectOrigin } from "./form_question_routine";

export const CheckboxOrigin = styled.label<{ $ischecked: boolean }>`
  border: 1px solid var(--color_theme_line);
  font-size: 16px !important;
  line-height: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  /* padding-right: 30px; */
  ${(props) => (props.$ischecked ? "" : "")}

  & input[type=checkbox] {
    margin: 0 4px;
  }
`;

const FormQuestionTime = () => {
  const [isAddTime, setIsAddTime] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAddTime(e.target.checked);
  };
  return (
    <>
      <CheckboxOrigin $ischecked={isAddTime}>
        時刻を追加
        <input type={"checkbox"} onChange={(e) => handleChange(e)} />
      </CheckboxOrigin>
      {isAddTime ? <FromQuestionTimeSetting /> : ""}
      <SelectOrigin>
        <option value="">ボタンを押して完了</option>
        <option value="">タイマーで完了</option>
      </SelectOrigin>
    </>
  );
};

export default FormQuestionTime;

const FromQuestionTimeSetting = () => {
  return (
    <>
      <InputTextNum />~<InputTextNum />
    </>
  );
};
