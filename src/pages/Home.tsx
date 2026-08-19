import styled from 'styled-components';
import ProjectCard from '../components/home/ProjectCard.tsx'
import HeroSection from "../components/home/HeroSection.tsx";

const Title = styled.h1`
    text-align: center;
`

const Footer = styled.footer`
    margin-top: var(--space-xl);
    border-top: 2px dotted var(--color-primary-dark);
    background-color: var(--color-primary-light);
    padding: var(--space-sm) var(--space-md);
`

export default function Home() {
    return (
        <>
            <Title>Portfolio</Title>
            <HeroSection />
            <ProjectCard
                name={"Personal website"}
                illustration={"digital-garden"}
                homeAddress={"https://flaufly.com/"}
                githubAddress={"https://github.com/FlauFly/flaufly-V2"}
                description={"My own personal website inspired by digital gardens, indie web and websites of yesteryear."}
                techStack={['javascript', 'typescript', 'astro']}
            />
            <ProjectCard
                name={"Philosophy Map"}
                illustration="philosophy-map"
                homeAddress={"https://philosophy-map.flaufly.com/"}
                githubAddress={"https://github.com/FlauFly/philosophy-map"}
                description={"Interactive 3D representation of Stanford Encylopedia of Philosophy."}
                techStack={['javascript', 'typescript', 'astro', 'python', 'pandas']}
            />
            <ProjectCard
                name={"Chess API"}
                illustration="chess-api"
                githubAddress={"https://github.com/FlauFly/chess-api"}
                description={"Minimalistic Flask API for checking and validating chess moves."}
                techStack={['python', 'flask']}
            />
            <Footer>
                <h2>Contact me:</h2>
            </Footer>      
        </>
    );
}