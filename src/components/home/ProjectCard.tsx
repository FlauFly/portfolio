import styled from "styled-components";
import TechCard from "./TechCard";
import Icon from "../Icon";
import Image from "../Image";

const Container = styled.div`
    background-color: var(--color-white);
    border: 2px solid var(--color-primary);
    margin: var(--space-lg);
    padding: var(--space-sm);
    border-radius: var(--radius-base);
    box-shadow: 3px 3px var(--color-primary);
`

const Title = styled.h2`
    color: var(--color-primary);
    font-size: var(--text-md);
`

const IconLink = styled.a`
    color: var(--color-gray);
    transition: color 0.3s ease;

    &:hover {
        color: var(--color-secondary);
    }
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
    illustration: string;
    homeAddress?: string;
    githubAddress?: string;
    description: string;
    techStack: string[];
}

export default function ProjectCard({
        name,
        illustration,
        homeAddress,
        githubAddress,
        description, 
        techStack
    }: ProjectCardProps) {
    return (        
        <Container>
            <Image name={illustration} width={'40%'} />
            <Title>{name}</Title>
            <IconLink href={homeAddress}>
                {homeAddress && <Icon name={"home"} size={36} />}    
            </IconLink>
            <IconLink href={githubAddress}>
                {githubAddress && <Icon name={"github"} size={36} />}    
            </IconLink>
            <Description>{description}</Description>
            <TechStack>
                {techStack.map(item => <TechCard key={item} name={item} />)}
            </TechStack>
        </Container>
    )
}