import { styled } from "styled-components";

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

const SelectOrigin = styled.select`
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
      <SelectOrigin>
        <option value="">月曜</option>
        <option value="">日曜</option>
      </SelectOrigin>
      <span>スタート</span>
    </>
  );
};
