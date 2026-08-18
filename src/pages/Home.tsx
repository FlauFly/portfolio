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
                illustration={"digital-garden"}
                homeAddress={"https://flaufly.com/"}
                githubAddress={"https://github.com/FlauFly/flaufly-V2"}
                description={"My own personal website inspired by digital gardens, indie web and websites of yesteryear where I publish any content I desire."}
                techStack={['javascript', 'typescript', 'astro']}
            />
            <ProjectCard
                name={"Philosophy Map"}
                illustration="philosophy-map"
                homeAddress={"https://philosophy-map.flaufly.com/"}
                githubAddress={"https://github.com/FlauFly/philosophy-map"}
                description={"3D representation of Stanford Encylopedia of Philosophy."}
                techStack={['javascript', 'typescript', 'astro', 'python', 'pandas']}
            />
            <ProjectCard
                name={"Chess API"}
                illustration="chess-api"
                githubAddress={"https://github.com/FlauFly/chess-api"}
                description={"Minimalistic Flask API for checking and validating chess moves."}
                techStack={['python', 'flask']}
            />            
        </>
    );
}