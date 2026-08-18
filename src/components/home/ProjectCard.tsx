import styled from "styled-components";
import TechCard from "./TechCard";

const Container = styled.div`
    background-color: var(--color-white);
    border: 2px solid var(--color-primary);
    margin: var(--space-lg);
    padding: var(--space-sm);
    border-radius: var(--radius-base);
`

const Title = styled.h2`
    color: var(--color-primary);
    font-size: var(--text-md);
`

const Description = styled.p`
    color: var(--color-text);
`

const TechStack = styled.div`
    display: flex;
    gap: var(--space-sm);
`

interface ProjectCardProps {
    name: string;
    description: string;
    techStack: string[];
}

export default function ProjectCard({name, description, techStack}: ProjectCardProps) {
    return (        
        <Container>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <TechStack>
                {techStack.map(item => <TechCard key={item} name={item} />)}
            </TechStack>
        </Container>
    )
}