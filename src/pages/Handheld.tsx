import styled from "styled-components";
import Image from "../components/Image";
import Screen from "../components/handheld/Screen";
import { projectsList } from "../data";

import { useState } from "react";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100lvh - 66px);
  overflow-y: hidden;
`;

const Console = styled.section`
  background-color: var(--color-primary);
  width: 350px;
  height: 550px;
  border-radius: 12px;
  border: 5px solid #000;
  position: relative;
  overflow: hidden;

  @media screen and (width >= 768px) {
    width: 760px;
    height: 470px;
  }
`;

const ButtonA = styled.button`
  position: absolute;
  border-radius: 50%;
  background-color: var(--color-secondary);
  width: 50px;
  height: 50px;
  bottom: 120px;
  right: 20px;
`;

const ButtonB = styled.button`
  position: absolute;
  border-radius: 50%;
  background-color: var(--color-secondary);
  width: 50px;
  height: 50px;
  bottom: 80px;
  right: 80px;
`;

const DPad = styled.div`
  position: absolute;
  background-color: var(--color-primary);
  bottom: 100px;
  left: 40px;
`;

const DPadButton = styled.button`
  position: relative;
  background-color: var(--color-gray);
  width: 40px;
  height: 40px;
`;

const ButtonLeft = styled(DPadButton)`
  transform: rotate(180deg);
`;

const ButtonRight = styled(DPadButton)`
  right: 40px;
`;

const ButtonUp = styled(DPadButton)`
  bottom: 40px;
  transform: rotate(-90deg);
`;

const ButtonDown = styled(DPadButton)`
  top: 40px;
  right: 40px;
  transform: rotate(90deg);
`;

export default function Handheld() {
  const [index, setIndex] = useState(0);
  {
    /* horizontal = left, center, right; vertical = up, bottom */
  }
  const [horizontal, setHorizontal] = useState("center");
  const [vertical, setVertical] = useState("top");
  const [tab, setTab] = useState("menu");

  function handleUp() {
    if (tab === "menu") {
      setIndex((index - 1 + projectsList.length) % projectsList.length);
    }
  }

  function handleDown() {
    if (tab === "menu") {
      setIndex((index + 1) % projectsList.length);
    }
  }

  function handleButtonA() {
    if (tab === "menu") {
      setTab("card");
    }
  }

  function handleButtonB() {
    if (tab === "card") {
      setTab("menu");
    }
  }

  let project = projectsList[index];

  return (
    <Main>
      <Console>
        <Screen
          name={project.name}
          illustration={project.illustration}
          tab={tab}
        />
        <DPad>
          <ButtonLeft>
            <Image name="arrow" />
          </ButtonLeft>
          <ButtonUp onClick={handleUp}>
            <Image name="arrow" />
          </ButtonUp>
          <ButtonDown onClick={handleDown}>
            <Image name="arrow" />
          </ButtonDown>
          <ButtonRight>
            <Image name="arrow" />
          </ButtonRight>
        </DPad>
        <ButtonA onClick={handleButtonA}>A</ButtonA>
        <ButtonB onClick={handleButtonB}>B</ButtonB>
      </Console>
    </Main>
  );
}
