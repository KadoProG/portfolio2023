"use client";

import { styled } from "styled-components";
import HeaderHamburger from "./header_hamburger";
import HeaderRightMenu from "./header_right_menu";

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1px;
  height: var(--len__header__height);
  border-bottom: 1px solid var(--color_theme_line);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const HeaderOrigin = () => {
  return (
    <DivHeader>
      <HeaderHamburger />
      <p>多分タイトル</p>
      <HeaderRightMenu />
    </DivHeader>
  );
};

export default HeaderOrigin;
