import styled from "styled-components";
import Menu from "./Menu";
import Card from "./Card";

const Container = styled.section`
  position: absolute;
  top: 30px;
  width: 300px;
  height: 285px;
  left: 20px;
  border: 5px solid #000;
  background-color: var(--color-gray);
  border-radius: 5px;
  z-index: 1;

  @media screen and (width >= 768px) {
    border-radius: 5px;
    top: 40px;
    left: 175px;
    width: 400px;
    height: 380px;
  }
`;

interface ScreenProps {
  name: string;
  illustration: string;
  tab: string;
  horizontal: string;
  vertical: string;
}

export default function Screen({
  name,
  illustration,
  tab,
  horizontal,
  vertical,
}: ScreenProps) {
  return (
    <Container>
      {tab === "menu" && <Menu name={name} />}

      {tab === "card" && (
        <Card
          name={name}
          illustration={illustration}
          horizontal={horizontal}
          vertical={vertical}
        />
      )}
    </Container>
  );
}
