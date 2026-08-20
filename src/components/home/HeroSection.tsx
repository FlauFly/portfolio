import styled from "styled-components";
import Icon from "../Icon";
import me from '../../assets/images/me.jpg'

const Container = styled.section`
    width: 100%;
    margin: var(--space-xl) 0;
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color-secondary);
        clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);

        @media screen and (width >= 768px) {
            clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);    
        }
    }
`

const Intro = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    @media screen and (width >= 768px) {
        flex-direction: row;
    }
`

const HeroImage = styled.img`
    width: 45%;
    clip-path: circle(50% at 50% 50%);

    @media screen and (width >= 768px) {
        width: 30%;
    }

    @media screen and (width >= 1020px) {
        width: 20%;
    }
`

const Text = styled.p`
    font-size: var(--text-lg);
    max-width: 60ch;
    text-align: center;
    padding: var(--space-xl) 0;
`

const TechGallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-lg) 0;   
`

const IconsWrapper = styled.div`
    padding: var(--space-md) var(--space-sm);
    display: flex;
    gap: var(--space-base);
    flex-wrap: wrap;
`

export default function HeroSection() {
    const icons = [
        'html5',
        'css3',
        'javascript',
        'typescript',
        'react',
        'astro',
        'nextjs',
        'tailwindcss',
        'python',
        'flask',
        'numpy',
        'pandas',
        'git',
        'github'
    ];

    return (
        <Container>
            <Intro>
                <HeroImage src={me} />
                <Text>
                    Hello, Wojciech here. I am aspiring web developer, learning and applying web technologies to my own little projects.
                    I am curious also about software beyond web, have a little bit of knowledge about data science and statistics.
                </Text>
            </Intro>
            <TechGallery>
                <Text>Tech & Tools that I know and use:</Text>
                <IconsWrapper>
                    {icons.map(item => <Icon name={item} color={"var(--color-background)"} size={64} />)}
                </IconsWrapper>
            </TechGallery>
        </Container>
    )
}