import styled from "styled-components";
import Image from "../Image";
import Icon from "../Icon";
import { projectsList } from "../../data";

const BackIcon = styled.section<{ isActivated: boolean }>`
  margin-inline: 5px;
  max-width: 46px;
  max-height: 42px;
  margin: 2px;
  border: ${(props) => (props.isActivated ? "5px black solid" : "none")};
`;

const Illustration = styled.div<{ isActivated: boolean }>`
  width: ${(props) => (props.isActivated ? "94%" : "100%")};
  position: relative;
  max-width: fit-content;
  margin-inline: auto;
  border: ${(props) => (props.isActivated ? "5px black solid" : "none")};
  padding: ${(props) => (props.isActivated ? "5px" : "none")};

  @media screen and (width >= 768px) {
    margin-bottom: 10px;
  }
`;

const ImageWrapper = styled.div<{ isActivated: boolean }>`
  opacity: ${(props) => (props.isActivated ? "0.5" : "1")};
`;

const Description = styled.p<{ isActivated: boolean }>`
  position: absolute;
  display: ${(props) => (props.isActivated ? "inline-block" : "none")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: var(--text-sm);

  @media screen and (width >= 768px) {
    font-size: var(--text-base);
  }
`;

const LinkIcons = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (width >= 768px) {
    margin-bottom: 10px;
  }
`;

const LinkIcon = styled.a<{ isActivated: boolean }>`
  max-height: ${(props) => (props.isActivated ? "44px" : "36px")};
  color: ${(props) =>
    props.isActivated
      ? "var(--color-secondary-dark)"
      : "var(--color-tertiary-dark)"};
  border: ${(props) => (props.isActivated ? "5px black solid" : "none")};
`;

const TechStack = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  list-style: none;
  padding: 0;

  @media screen and (width >= 768px) {
    margin-bottom: 10px;
  }
`;

const Tech = styled.li`
  color: var(--color-primary);
  margin: 0;
  padding: 0;
  height: 24px;
`;

const Arrows = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (width >= 768px) {
    margin-top: 20px;
  }
`;

const Arrow = styled.span<{ isActivated: boolean }>`
  max-height: ${(props) => (props.isActivated ? "36px" : "24px")};
  margin-inline: 5px;
  color: ${(props) =>
    props.isActivated ? "var(--color-tertiary-dark)" : "dark"};
  border: ${(props) => (props.isActivated ? "5px black solid" : "none")};
`;

interface CardProps {
  name: string;
  illustration: string;
  horizontal: string;
  vertical: string;
}

export default function Card({
  name,
  illustration,
  horizontal,
  vertical,
}: CardProps) {
  let index = projectsList.findIndex((element) => element.name === name);
  let project = projectsList[index];
  return (
    <>
      <BackIcon isActivated={vertical === "top"}>
        <Icon name="back" />
      </BackIcon>
      <TechStack>
        {project.techStack.map((tech) => (
          <Tech>
            <Icon name={tech} size="24px" />
          </Tech>
        ))}
      </TechStack>
      <Illustration isActivated={vertical === "middle-top"}>
        <ImageWrapper isActivated={vertical === "middle-top"}>
          <Image name={illustration} />
        </ImageWrapper>
        <Description isActivated={vertical === "middle-top"}>
          {project.description}
        </Description>
      </Illustration>
      <LinkIcons>
        <LinkIcon
          isActivated={vertical === "middle-bottom" && horizontal === "left"}
          href={project.homeAddress}
        >
          <Icon name="home" />
        </LinkIcon>
        <LinkIcon
          isActivated={vertical === "middle-bottom" && horizontal === "right"}
          href={project.githubAddress}
        >
          <Icon name="github" />
        </LinkIcon>
      </LinkIcons>
      <Arrows>
        <Arrow isActivated={vertical === "bottom" && horizontal === "left"}>
          <Icon name="arrow-badge-left" size="24px" />
        </Arrow>
        <Arrow isActivated={vertical === "bottom" && horizontal === "right"}>
          <Icon name="arrow-badge-right" size="24px" />
        </Arrow>
      </Arrows>
    </>
  );
}
