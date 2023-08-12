"use client";

import { useState } from "react";
import styled from "styled-components";

const DivHeaderHamburger = styled.div<{ $ischecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: var(--len__header__height);
  height: var(--len__header__height);
  cursor: pointer;
  & span {
    width: 100%;
    height: 2px;
    position: relative;
    background: var(--color_theme_text);
    transition: 0.3s;
    border-radius: 1px;
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      transition: 0.3s;
      position: absolute;
      background: var(--color_theme_text);
      border-radius: 1px;
    }
    &::before {
      top: -10px;
    }
    &::after {
      top: 10px;
    }
    ${(props) =>
      props.$ischecked
        ? "transform: rotate(45deg);\
           &::before {transform: translateY(10px); opacity: 0;}\
           &::after {transform: translateY(-10px) rotate(-90deg);}\
           "
        : ""}
  }
  &:hover {
    filter: contrast(90%);
  }
`;

const HeaderHamburger = () => {
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <DivHeaderHamburger $ischecked={isChecked} onClick={handleClick}>
      <span></span>
    </DivHeaderHamburger>
  );
};

export default HeaderHamburger;
