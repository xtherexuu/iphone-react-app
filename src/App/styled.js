import styled, { css } from "styled-components";

export const Iphone = styled.div`
  z-index: 10px;
  min-width: 260px;
  height: 500px;
  border: 8px solid black;
  border-radius: 40px;
  overflow: hidden;
  /* overflow-y: auto; */
  position: relative;
`;

export const TopCameraSpace = styled.div`
  z-index: 10;
  height: 24px;
  width: 100px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TopCamera = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 30px;
    width: 30px;
    height: 4px;
    border-radius: 10px;
    border: solid 0.03em rgb(51, 51, 51, 0.479);
    box-shadow: inset 0px 0px 3px 0px rgb(51, 51, 51, 0.71);
  }
  &::after {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #333;
    position: absolute;
    top: 5px;
    right: 20px;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 5px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

export const LeftNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  & > * {
    padding: 0 2px;
  }
`;

export const AppContainer = styled.div``;

export const BackgroundImage = styled.div``;

export const BackgroundFrame = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #b7bed0;

  &::before {
    z-index: 1;
    content: "";
    position: absolute;
    width: 570px;
    height: 570px;
    border-radius: 50%;
    background-image: linear-gradient(#e2b64f 45%, #ac2e2a 90%);
    top: -200px;
    right: -350px;
    box-shadow: 40px 60px 40px 0 #091933;
  }

  &:after {
    content: "";
    position: absolute;
    right: -330px;
    top: 200px;
    height: 570px;
    width: 570px;
    border-radius: 50%;
    background-image: linear-gradient(#133164, #142e5aa8);
  }
`;

export const ExtraBgOne = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  transform: rotate(20deg) translateX(20px);
  width: 70px;
  background-color: #ac2e2a;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 55px;
    height: 20px;
    width: 20px;
    border-top-right-radius: 10px;
    background-color: #091a3502;
    box-shadow: 0px -10px 0px 0px #ac2e2a;
  }
`;

export const ExtraBgTwo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 190px;
  background-image: linear-gradient(to top, #bc517f 10%, transparent);
`;

export const LockScreen = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: top;
  transition: 0s 0.75s;
  visibility: visible;
  ${({ isUnlocked }) =>
    isUnlocked &&
    css`
      visibility: hidden;
    `}
`;

export const TimeAndDate = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  clip-path: inset(0% 0% 0% 0%);
  transition: 0.25s 0.5s;
  ${({ isUnlocked }) =>
    isUnlocked &&
    css`
      clip-path: inset(0% 0% 100% 0%);
    `}
`;

export const Time = styled.h1`
  margin: 0;
  color: white;
  font-weight: 500;
  font-size: 50px;
  ${({ small }) =>
    small &&
    css`
      font-size: 13px;
      font-weight: normal;
    `}
`;

export const Date = styled.span`
  color: white;
`;

export const LockedScreenNav = styled.div`
  width: 100%;
  position: absolute;
  height: fit-content;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  transition: 1s;
  ${({ isUnlocked }) =>
    isUnlocked &&
    css`
      bottom: 100%;
    `}
`;

export const LockedNavLeft = styled.div`
  transform: rotate(-45deg);
`;

export const LockedNavRight = styled.div``;

export const Button = styled.button`
  transition: 0.8s;
  margin: 20px;
  background-color: rgb(0, 0, 0, 0.452);
  backdrop-filter: blur(8px);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ openButton }) =>
    openButton &&
    css`
      margin: 0;
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translate(-50%, 0);
      transition: 1s;
      ${({ isUnlocked }) =>
        isUnlocked &&
        css`
          bottom: 100%;
        `}
      color: white;
      border-radius: none;
      display: block;
      font-size: 10px;
      height: 20px;
      width: auto;
      background-color: transparent;
      padding: 2px 5px;
    `}
  ${({ mainButton }) =>
    mainButton &&
    css`
      margin: 0;
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translate(-50%);
      background-color: white;
      height: 2px;
      width: 90px;
      z-index: 1;
    `}
    ${({ indicator }) =>
    indicator &&
    css`
      background-color: transparent;
      border: 1px solid white;
      width: 8px;
      height: 8px;
      margin: 4px;
      ${({ isActive }) =>
        isActive &&
        css`
          background-color: white;
        `}
    `}
    ${({ testing }) =>
    testing &&
    css`
      background-color: red;
      border-radius: 0;
      position: absolute;
      top: 0;
      left: 0;
    `}
`;

export const ApplicationMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  scale: 5;
  visibility: hidden;
  ${({ isUnlocked }) =>
    isUnlocked &&
    css`
      visibility: visible;
      scale: 1;
    `}
  transition: .5s .5s;
`;

export const Applications = styled.div`
  height: 100%;
  transition: transform 0.7s;
  ${({ page }) =>
    page === 1 &&
    css`
      transform: translateX(0);
    `}
  ${({ page }) =>
    page === 2 &&
    css`
      transform: translateX(-300px);
    `}
`;

export const AppSlideOne = styled.div``;

export const AppSlideTwo = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateX(300px);
`;

export const IconSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 75px;
  justify-content: center;
  grid-row-gap: 50px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ faceTime }) =>
    faceTime &&
    css`
      background-color: #65ec43;
    `}
  ${({ camera }) =>
    camera &&
    css`
      background-color: #b2b1c3;
    `}
  ${({ mail }) =>
    mail &&
    css`
      background-image: linear-gradient(#2452ed, #3e93d7);
    `}
  ${({ ibook }) =>
    ibook &&
    css`
      background-color: #d69c02;
    `}
  ${({ ituneStore }) =>
    ituneStore &&
    css`
      background-image: linear-gradient(#c000eb, #9d0df9);
    `}
  ${({ video }) =>
    video &&
    css`
      background-color: #111713;
    `}
  ${({ appleStore }) =>
    appleStore &&
    css`
      background-image: linear-gradient(#4a80d2, #254fb8);
    `}
  ${({ phone }) =>
    phone &&
    css`
      background-color: #9ff327;
    `}
  ${({ home }) =>
    home &&
    css`
      background-image: linear-gradient();
    `}
  ${({ itune }) =>
    itune &&
    css`
      background-color: #c93b44;
    `}
  ${({ message }) =>
    message &&
    css`
      background-color: #adec43;
    `}
  ${({ health }) =>
    health &&
    css`
      background-image: linear-gradient();
    `}
  ${({ xbox }) =>
    xbox &&
    css`
      background-color: green;
    `}
  ${({ playstation }) =>
    playstation &&
    css`
      background-image: linear-gradient(blue, #000 180%);
    `}
  ${({ messenger }) =>
    messenger &&
    css`
      background-color: rgb(47, 47, 253);
      position: relative;
      &::before {
        content: "5";
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: rgb(226, 4, 4);
        font-weight: bold;
        position: absolute;
        top: -5px;
        right: -5px;
        line-height: 15px;
        font-size: 8px;
        color: #fff;
      }
    `}
  ${({ spotify }) =>
    spotify &&
    css`
      background-color: rgb(14, 13, 13);
    `}
  ${({ facebook }) =>
    facebook &&
    css`
      background-image: linear-gradient(#4a80d2, #254fb8);
    `}
  ${({ instagram }) =>
    instagram &&
    css`
      background-image: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    `}
  ${({ twitter }) =>
    twitter &&
    css`
      background-image: linear-gradient(#4083e9, #376bee);
    `}
  ${({ pinterest }) =>
    pinterest &&
    css`
      background-color: rgb(253, 36, 36);
    `}
  ${({ github }) =>
    github &&
    css`
      background-color: #333;
    `}
  ${({ youtube }) =>
    youtube &&
    css`
      background-color: red;
    `}
  ${({ whatsapp }) =>
    whatsapp &&
    css`
      background-color: rgb(4, 180, 4);
    `}
  ${({ snapchat }) =>
    snapchat &&
    css`
      background-color: rgb(214, 214, 25);
    `}
`;

export const AppName = styled.label`
  color: white;
  font-size: 9px;
`;

export const Indicators = styled.div`
  z-index: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(75px + 50px);
  display: flex;
`;

export const BottomNav = styled.nav`
  z-index: 1;
  position: absolute;
  bottom: calc(15px + 50px);
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: calc(100% - 21px);
  justify-content: center;
  background-color: rgb(225, 225, 225, 0.252);
  padding: 5px;
  margin: 0 10.5px;
  border-radius: 10px;
`;
