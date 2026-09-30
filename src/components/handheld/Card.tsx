import styled from "styled-components";
import Image from "../Image";

const Name = styled.h2`
  text-align: center;
`;

const Illustration = styled.div`
  width: 100%;
`;

interface CardProps {
  name: string;
  illustration: string;
}

export default function Card({ name, illustration }: CardProps) {
  return (
    <>
      <Name>{name}</Name>
      <Illustration>
        <Image name={illustration} />
      </Illustration>
    </>
  );
}
