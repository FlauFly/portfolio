import styled from "styled-components";
import ProjectCard from '../components/ProjectCard.tsx'

const Title = styled.h1`
    color: var(--color-primary);
`;

export default function Home() {
    return (
        <>
            <Title>Home Page</Title>
            <ProjectCard name="Personal website" />
        </>
    );
}