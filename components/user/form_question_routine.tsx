import { styled } from "styled-components";
import { CheckboxOrigin } from "./form_question_time";
import { useState } from "react";

type Props = {
  index: number;
};

const FormQuestionRoutine = (props: Props) => {
  const index = props.index;

  switch (index) {
    case 0:
      return <FormQuestion_0 />;
    case 1:
      return <FormQuestion_1 />;
    case 2:
      return <FormQuestion_2 />;
    case 3:
      return <FormQuestion_3 />;
  }

  return <></>;
};

export default FormQuestionRoutine;

export const InputTextNum = styled.input`
  border: 1px solid var(--color_theme_line);
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  width: 40px;
  text-align: right;
`;

export const SelectOrigin = styled.select`
  font-size: 16px;
  line-height: 30px;
  height: 30px;
`;

export const FormQuestion_0 = () => {
  return (
    <>
      <InputTextNum type={"text"} />
    </>
  );
};
export const FormQuestion_1 = () => {
  return (
    <>
      <InputTextNum type={"text"} value={1} />
      <span>日に</span>
      <InputTextNum type={"text"} value={1} />
      <span>回</span>
    </>
  );
};
export const FormQuestion_2 = () => {
  // ◯週間に◯回
  return (
    <>
      <SelectOrigin>
        <option value="">平日のみ</option>
        <option value="">休･祝日のみ</option>
        <option value="">全ての日</option>
      </SelectOrigin>
      <InputTextNum type={"text"} />
      <span>週間に</span>
      <InputTextNum type={"text"} />
      <span>回</span>
    </>
  );
};

const DivCheckbox = styled.div`
  height: 30px;
  line-height: 30px;
  & label {
    line-height: 30px;
  }
`;

export const FormQuestion_3 = () => {
  // ステートの変数軍
  const [weekStatuses, setWeekStatuses] = useState([
    { name: "月", isChecked: false },
    { name: "火", isChecked: false },
    { name: "水", isChecked: false },
    { name: "木", isChecked: false },
    { name: "金", isChecked: false },
    { name: "土", isChecked: false },
    { name: "日", isChecked: false },
  ]);

  const [weekTypeIndex, setWeekTypeIndex] = useState<string>("-1");
  const [isHolidayExist, setIsHolidayExist] = useState<boolean>(false);

  // 定数的なやつ
  const weekTypes = [
    { name: "平日のみ", targetWeek: ["月", "火", "水", "木", "金"] },
    { name: "休･祝日のみ", targetWeek: ["土", "日"] },
    {
      name: "全ての日",
      targetWeek: ["月", "火", "水", "木", "金", "土", "日"],
    },
    { name: "カスタム", targetWeek: null },
  ];

  const handleWeekTypeChange = (selectedIndex: number) => {
    setWeekTypeIndex(String(selectedIndex));
    if (weekTypes[selectedIndex].targetWeek === null) return;

    const newWeekStatuses = weekStatuses.map((weekStatus) => {
      const existWeek = weekTypes[selectedIndex].targetWeek?.findIndex(
        (week) => {
          return week === weekStatus.name;
        }
      );

      const isExistWeek = existWeek !== -1;

      return { name: weekStatus.name, isChecked: isExistWeek };
    });

    setWeekStatuses(newWeekStatuses);
  };

  const handleChange = (row: number, isChecked: boolean) => {
    const targetWeekIndex = weekTypes.findIndex(
      (weekType) => weekType.targetWeek === null
    );
    handleWeekTypeChange(targetWeekIndex);

    const newWeekStatuses = weekStatuses.map((weekStatus, index) => {
      if (row === index) {
        return { name: weekStatus.name, isChecked: isChecked };
      }
      return weekStatus;
    });
    setWeekStatuses(newWeekStatuses);
  };

  const handlHolidayExistChange = (isChecked: boolean) => {
    setIsHolidayExist(isChecked);
  };
  // 週確定
  return (
    <>
      <SelectOrigin
        onChange={(e) => handleWeekTypeChange(e.target.selectedIndex)}
        value={weekTypeIndex}
      >
        {weekTypes.map((weekType, index) => {
          return (
            <option value={index} key={index}>
              {weekType.name}
            </option>
          );
        })}
      </SelectOrigin>
      <CheckboxOrigin $ischecked={isHolidayExist}>
        祝日を含む
        <input
          type="checkbox"
          checked={isHolidayExist}
          onChange={(e) => handlHolidayExistChange(e.target.checked)}
        />
      </CheckboxOrigin>
      <DivCheckbox>
        {weekStatuses.map((weekStatus, row) => {
          return (
            <>
              <CheckboxOrigin $ischecked={weekStatus.isChecked}>
                {weekStatus.name}
                <input
                  type="checkbox"
                  onChange={(e) => handleChange(row, e.target.checked)}
                  checked={weekStatus.isChecked}
                />
              </CheckboxOrigin>
            </>
          );
        })}
      </DivCheckbox>
    </>
  );
};
