import { styled } from "styled-components";

const ButtonElement = styled.button`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 20px);
  border: 1px solid var(--color_theme_line);
  cursor: pointer;
  &:hover {
    filter: contrast(90%);
  }
`;

const BtnAddTask = () => {
  return (
    <>
      <ButtonElement>継続タスクを追加</ButtonElement>
    </>
  );
};

export default BtnAddTask;
