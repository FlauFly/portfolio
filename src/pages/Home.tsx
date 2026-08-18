import styled from "styled-components";
import ProjectCard from '../components/home/ProjectCard.tsx'

const Title = styled.h1`
    color: var(--color-primary);
`;

export default function Home() {
    return (
        <>
            <Title>Home Page</Title>
            <ProjectCard
                name={"Personal website"}
                description={"My own personal website inspired by other digital gardens when I publish any content I desire"}
                techStack={['javascript', 'typescript', 'astro']}
            />
        </>
    );
}