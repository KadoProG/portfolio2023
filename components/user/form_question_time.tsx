import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { InputTextNum } from "./form_question_routine";

const CheckboxOrigin = styled.label<{ $ischecked: boolean }>`
  border: 1px solid var(--color_theme_line);
  font-size: 16px !important;
  line-height: 30px;
  height: 30px;
  cursor: pointer;
  /* padding-right: 30px; */
  ${(props) => (props.$ischecked ? "" : "")}

  & input[type=checkbox] {
    margin: 0 4px;
  }
`;

const FormQuestionTime = () => {
  const [isAddTime, setIsAddTime] = useState<boolean>(false);

  const handleClick = () => {
    setIsAddTime(!isAddTime);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAddTime(e.target.checked);
  };
  return (
    <>
      <CheckboxOrigin $ischecked={isAddTime} onClick={handleClick}>
        時刻を追加
        <input type={"checkbox"} onChange={(e) => handleChange(e)} />
      </CheckboxOrigin>
      {isAddTime ? <FromQuestionTimeSetting /> : ""}
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
