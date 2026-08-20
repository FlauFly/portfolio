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
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    @media screen and (width >= 768px) {
        flex-direction: row;
    }
`

const Illustration = styled.div`
    width: 100%;

    @media screen and (width >= 768px) {
        width: 35%;
    }
`

const Information = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-base);
`

const Title = styled.h2`
    color: var(--color-primary);
`

const Icons = styled.span`
    display: flex;
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
    margin-bottom: var(--space-base);
`

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-top: auto;
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
            <Illustration>
                <Image name={illustration} />
            </Illustration>
            <Information>
                <Header>
                    <Title>{name}</Title>
                    <Icons>
                        <IconLink href={homeAddress}>
                            {homeAddress && <Icon name={"home"} />}    
                        </IconLink>
                        <IconLink href={githubAddress}>
                            {githubAddress && <Icon name={"github"} />}    
                        </IconLink>
                    </Icons>
                </Header>
                <Description>{description}</Description>
                <TechStack>
                    {techStack.map(item => <TechCard key={item} name={item} />)}
                </TechStack>
            </Information>
        </Container>
    )
}