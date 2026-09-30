import styled from "styled-components";
import { projectsList } from "../../data";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 10px;
  padding: 0;
  gap: 20px;
  justify-content: center;
  height: 100%;
`;

const Project = styled.li<{ isActivated: boolean }>`
  background-color: ${(props) =>
    props.isActivated ? "var(--color-tertiary)" : "var(--color-tertiary-dark)"};
  box-shadow: ${(props) =>
    props.isActivated
      ? "10px 10px var(--color-text)"
      : "5px 5px var(--color-text)"};
  translate: ${(props) => (props.isActivated ? "-5px -5px" : "none")};
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease;
`;

interface MenuProps {
  name: string;
}

export default function Menu({ name }: MenuProps) {
  return (
    <List>
      {projectsList.map((project) => (
        <Project isActivated={project.name === name}>{project.name}</Project>
      ))}
    </List>
  );
}
