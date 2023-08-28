import { styled } from "styled-components";
import { ButtonOrigin } from "../user/htmlOriginElements";

type Props = {
  // eslint-disable-next-line
  projectTask: any;
};

const DivHomeSoloProjectTaskItem = styled.div`
  display: flex;
  border: 1px solid var(--color_theme_line);
  height: 55px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;

  & > div {
    display: flex;
    height: 100%;
    align-items: center;
    &:last-child {
      padding-right: 8px;
    }
  }
`;

const SpanTaskName = styled.span`
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 10px;
    margin-right: 2px;
    height: 30px;
    background: #cfebff;
  }
`;

const SpanTaskLimit = styled.span`
  min-width: 72px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0 8px;
  margin-right: 8px;
  background: var(--color_theme_back2);
`;

const HomeSoloProjectTaskItem = (props: Props) => {
  const projectTask = props.projectTask;
  if (projectTask.or !== undefined) {
    return (
      <>
        {
          // eslint-disable-next-line
          projectTask.or.map((taskName: any, index: number) => {
            return (
              <DivHomeSoloProjectTaskItem key={index}>
                <div>
                  <DraggableSideButton />
                  <SpanTaskName>{taskName}</SpanTaskName>
                </div>
                <div>
                  <SpanTaskLimit>２日遅れ</SpanTaskLimit>
                  <ButtonOrigin $width={90} $radius={5} $inline={false}>
                    打刻する
                  </ButtonOrigin>
                </div>
              </DivHomeSoloProjectTaskItem>
            );
          })
        }
      </>
    );
  }

  const taskName = projectTask.name;
  return (
    <>
      <DivHomeSoloProjectTaskItem>
        <div>
          <DraggableSideButton />
          <SpanTaskName>{taskName}</SpanTaskName>
        </div>
        <div>
          <SpanTaskLimit>本日中</SpanTaskLimit>
          <ButtonOrigin $width={90} $radius={5} $inline={false}>
            打刻する
          </ButtonOrigin>
        </div>
      </DivHomeSoloProjectTaskItem>
    </>
  );
};

export default HomeSoloProjectTaskItem;

const SpanDraggableSideButton = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30px;
  min-width: 30px;
  height: 53px;
  padding: 10px 0;
  align-items: center;
  height: 100%;
  cursor: grab;
  &:hover {
    filter: contrast(90%);
  }
  /* border: 1px solid black; */
  & > span {
    width: 4px;
    margin: 0 4px;
    height: 4px;
    border-radius: 2px;
    background: gray;
  }
`;
const DraggableSideButton = () => {
  return (
    <SpanDraggableSideButton>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </SpanDraggableSideButton>
  );
};
