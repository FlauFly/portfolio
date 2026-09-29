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

const Project = styled.li`
  background-color: var(--color-tertiary-dark);
  padding: 10px;
  text-align: center;
`;

export default function Menu() {
  return (
    <List>
      {projectsList.map((project) => (
        <Project>{project.name}</Project>
      ))}
    </List>
  );
}
