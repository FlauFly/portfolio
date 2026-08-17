import styled from "styled-components";

const Container = styled.div`
    background-color: var(--color-white);
    border: 2px solid var(--color-primary);
    margin: var(--space-lg);
    border-radius: var(--)
`

export default function ProjectCard({name}: {name: string}) {
    return (
        <Container>
            <h2>{name}</h2>
            <img></img>
            <span>Javascript</span>
            <span>Typescript</span>
            <span>AstroJS</span>
        </Container>
    )
}