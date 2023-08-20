import { ChangeEvent, useState } from "react";
import {
  CheckboxOrigin,
  InputTextOrigin,
  SelectOrigin,
} from "./htmlOriginElements";

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
      <InputTextOrigin />~<InputTextOrigin />
    </>
  );
};
