import { styled } from "styled-components";
import { useState } from "react";
import { CheckboxOrigin, SelectOrigin } from "./htmlOriginElements";
import {
  ARRAY_WEEK,
  WEEK_OPTION,
  userChildTask,
  userChildTask_week,
} from "./types";

type Props = {
  index: number;
  userChildTask: userChildTask;
  setUserChildTask(userChildTask: userChildTask): void;
};

const FormQuestionRoutine = (props: Props) => {
  const index = props.index;
  const userChildTask = props.userChildTask;

  // ===============データ取得処理「Week」
  const userChildTaskWeek = () => {
    if (userChildTask.week) {
      return userChildTask.week;
    } else {
      // 子要素の初期化
      const newWeek: userChildTask_week = {
        require: 0,
        receive: [0, 0, 0, 0, 0, 0, 0, 0],
        start: 0,
      };
      return newWeek;
    }
  };

  // ===============データ取得処理「WeekConfirm」
  const userChildTaskWeekConfirm = () => {
    if (userChildTask.weekConfirm) {
      return userChildTask.weekConfirm;
    } else {
      const newWeek: userChildTask_week = {
        require: 0,
        receive: [0, 0, 0, 0, 0, 0, 0, 0],
        start: 0,
      };
      return newWeek;
    }
  };

  // ===============ユーザの変更イベント処理「Week」
  const handleWeekChange = (week: userChildTask_week) => {
    const newUserChildTask = { ...userChildTask, week: week };
    props.setUserChildTask(newUserChildTask);
  };

  // ===============ユーザの変更イベント処理「WeekConfirm」
  const handleWeekConfirmChange = (weekConfirm: userChildTask_week) => {
    const newUserChildTask = { ...userChildTask, weekConfirm: weekConfirm };
    props.setUserChildTask(newUserChildTask);
  };

  switch (index) {
    case 0:
      return (
        <FormQuestion_2
          week={userChildTaskWeek()}
          setWeek={(week) => handleWeekChange(week)}
        />
      );
    // return <FormQuestion_0 />;
    case 1:
      return (
        <FormQuestion_3
          weekConfirm={userChildTaskWeekConfirm()}
          setWeekConfirm={(weekConfirm) => handleWeekConfirmChange(weekConfirm)}
        />
      );
    // return <FormQuestion_1 />;
    case 2:
    case 3:
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

const DivFormQuestion_2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

type Props_2 = {
  week: userChildTask_week;
  setWeek(week: userChildTask_week): void;
};

export const FormQuestion_2 = (props: Props_2) => {
  const weekData = props.week;

  const handleChange = (row: number, handleNum: number) => {
    const newWeekData_receive = weekData.receive.map((num, index) => {
      if (row === index) return handleNum;
      return num;
    });

    const newWeekData: userChildTask_week = {
      ...weekData,
      receive: newWeekData_receive,
    };

    props.setWeek(newWeekData);
  };

  return (
    <DivFormQuestion_2>
      {ARRAY_WEEK.map((weekName, index) => {
        return (
          <FormQuestion_2_0
            key={index}
            name={weekName}
            num={weekData.receive[index] | 0}
            setNum={(num) => handleChange(index, num)}
          />
        );
      })}
    </DivFormQuestion_2>
  );
};

const DivFormQuestion_2_0 = styled.div`
  height: 60px;
  border: 1px solid var(--color_theme_line);
  /* flex: 1; */
  display: flex;
  flex-flow: column;
  justify-content: center;
  & > button {
    width: 100%;
    height: 20px;
    border: none;
    border-top: 1px solid var(--color_theme_line);
  }
`;

const SpanFormQuestion_2_0 = styled.span<{ $color: string }>`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  ${(props) => (props.$color ? "background:" + props.$color : "")}
`;

type Props_2_0 = {
  name: string;
  num: number;
  setNum(num: number): void;
};
const FormQuestion_2_0 = (props: Props_2_0) => {
  const name = props.name;
  const num = props.num;
  const color = () => {
    switch (num) {
      case 0:
        return "var(--color_theme_back)";
      case 1:
        return "green";
      case 2:
        return "blue";
      case 3:
        return "red";
      default:
        return "var(--color_theme_back)";
    }
  };

  const handleNumChange = (handleNum: number) => {
    const preNum = num + handleNum;
    // 0~3の4通りのみ それ以外は何もしない
    if (preNum === 4 || preNum === -1) return;
    props.setNum(preNum);
  };

  return (
    <DivFormQuestion_2_0>
      <SpanFormQuestion_2_0 $color={color()}>{name}</SpanFormQuestion_2_0>
      <button onClick={() => handleNumChange(1)}>↑</button>
      <button onClick={() => handleNumChange(-1)}>↓</button>
    </DivFormQuestion_2_0>
  );
};

const DivFormQuestion_3 = styled.div`
  display: flex;
`;

type Props_3 = {
  weekConfirm: userChildTask_week;
  setWeekConfirm(weekConfirm: userChildTask_week): void;
};

export const FormQuestion_3 = (props: Props_3) => {
  const weekData = props.weekConfirm;

  const [weekTypeIndex, setWeekTypeIndex] = useState<string>("0");

  const handleChange = (row: number, isChecked: boolean) => {
    // 「カスタム」に切り替え
    setWeekTypeIndex(String(WEEK_OPTION.length - 1));
    // 更新済みの配列を作成
    const newNum = isChecked ? 1 : 0;
    const newWeekData_receive = weekData.receive.map((num, index) => {
      if (row === index) return newNum;
      return num;
    });

    // 新しいデータを作成
    const newWeekData: userChildTask_week = {
      ...weekData,
      receive: newWeekData_receive,
    };

    // 上位のコンポーネントで上書き
    props.setWeekConfirm(newWeekData);
  };

  const handleWeekTypeChange = (selectedIndex: number) => {
    // Selectの状態を反映
    setWeekTypeIndex(String(selectedIndex));
    if (WEEK_OPTION[selectedIndex].targetWeek === null) return;

    // 平日・休日、等の設定を自動的に反映
    const newWeekData_receive = ARRAY_WEEK.map((weekName) => {
      const existWeek = WEEK_OPTION[selectedIndex].targetWeek?.findIndex(
        (week) => week === weekName
      );

      const isExistWeek = existWeek !== -1;
      return isExistWeek ? 1 : 0;
    });

    // 新しいデータを作成
    const newWeekData: userChildTask_week = {
      ...weekData,
      receive: newWeekData_receive,
    };

    // 上位のコンポーネントで上書き
    props.setWeekConfirm(newWeekData);
  };

  // 週確定
  return (
    <DivFormQuestion_3>
      <SelectOrigin
        onChange={(e) => handleWeekTypeChange(e.target.selectedIndex)}
        value={weekTypeIndex}
      >
        {WEEK_OPTION.map((weekType, index) => {
          return (
            <option value={index} key={index}>
              {weekType.name}
            </option>
          );
        })}
      </SelectOrigin>
      {ARRAY_WEEK.map((weekName, row) => {
        const isTargetChecked = weekData.receive[row] === 1;
        return (
          <CheckboxOrigin key={row} $ischecked={isTargetChecked}>
            {weekName}
            <input
              type="checkbox"
              onChange={(e) => handleChange(row, e.target.checked)}
              checked={isTargetChecked}
            />
          </CheckboxOrigin>
        );
      })}
    </DivFormQuestion_3>
  );
};
