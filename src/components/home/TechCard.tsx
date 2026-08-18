import styled from "styled-components";
import Icon from "../Icon";

const Container = styled.span`
    display: flex;
    align-items: center;
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-base);
    padding: var(--space-xs);
    background-color: var(--color-background);
`

export default function TechCard({ name }: { name: string }) {
    return (
        <Container>
            <Icon name={name} color={"var(--color-primary)"} size={36} />
            <div>{name.replace(/^./, char => char.toUpperCase())}</div>
        </Container>
    )
}