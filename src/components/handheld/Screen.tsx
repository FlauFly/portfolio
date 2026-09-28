import styled from "styled-components";
import Image from "../Image";

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

const Name = styled.h2`
  text-align: center;
`;

const Illustration = styled.div`
  width: 100%;
`;

interface ScreenProps {
  name: string;
  illustration: string;
}

export default function Screen({ name, illustration }: ScreenProps) {
  return (
    <Container>
      <Name>{name}</Name>
      <Illustration>
        <Image name={illustration} />
      </Illustration>
    </Container>
  );
}
