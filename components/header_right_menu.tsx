import Image from "next/image";
import { styled } from "styled-components";

const DivRightMenu = styled.div`
  width: var(--len__header__height);
  height: var(--len__header__height);
  display: flex;
  justify-content: center;
  padding: 4px;
  align-items: center;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid gray;
    border-radius: 50%;
  }
  &:hover {
    filter: contrast(90%);
  }
`;

const HeaderRightMenu = () => {
  return (
    <DivRightMenu>
      <Image
        src={"/myself_2022-04-22.jpg"}
        width={40}
        height={40}
        alt={"俺だ"}
      />
    </DivRightMenu>
  );
};

export default HeaderRightMenu;
