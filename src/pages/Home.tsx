import styled from 'styled-components';
import ProjectCard from '../components/home/ProjectCard.tsx'
import HeroSection from "../components/home/HeroSection.tsx";
import Icon from '../components/Icon.tsx';

const Title = styled.h1`
    text-align: center;
    margin: var(--space-md);
    color: var(--color-primary-dark);
`

const Footer = styled.footer`
    margin-top: var(--space-xl);
    border-top: 2px solid var(--color-primary-dark);
    padding: var(--space-sm) var(--space-md);
    background-color: var(--color-primary-light);
`

const ContactLine = styled.span`
    display: flex;
    gap: var(--space-base);
    align-items: center;
`

const IconLink = styled.a`
    color: var(--color-primary-dark);
`

export default function Home() {
    return (
        <>
            <Title>Portfolio - Wojciech Kowalski</Title>
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
                <ContactLine>
                    <IconLink href='mailto:tirhhe@gmail.com'>
                        <Icon name='mail' size={48} />
                    </IconLink>
                    <span>tirhhe@gmail.com</span>
                </ContactLine>
                <ContactLine>
                    <Icon name='phone' size={48} color='var(--color-primary-dark)' />
                    <span>+48 609 883 977</span>
                </ContactLine>
            </Footer>      
        </>
    );
}