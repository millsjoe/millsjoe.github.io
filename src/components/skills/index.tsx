import { ThemeIcon, Text, Col, SimpleGrid } from "@mantine/core";
import {
    SiTypescript,
    SiReact,
    SiPython,
    SiPerl,
    SiKotlin,
    SiC,
    SiJenkins,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
    {
        icon: SiTypescript,
        name: "Typescript",
        description:
            "A nice way of doing Javascript and still being able to claim Im an engineer",
    },
    {
        icon: SiReact,
        name: "React",
        description: "Just take this site for example",
    },
    {
        icon: SiPython,
        name: "Python",
        description:
            "Sugar and spice and everything nice (except performance) ",
    },
    {
        icon: SiPerl,
        name: "Perl",
        description: "Legacy codebase, need I say more?",
    },
    {
        icon: SiKotlin,
        name: "Kotlin",
        description: "Imagine a sexy version of Java",
    },
    {
        icon: SiC,
        name: "C",
        description:
            "This might be reaching but I did it at Uni and it sounds impressive",
    },
    {
        icon: SiJenkins,
        name: "Jenkins",
        description: "I'm no devops, but I'm a sucker for some good CI",
    },
    {
        icon: FaAws,
        name: "AWS",
        description:
            "Familiar being the key word here. I know some of it but barely enough to scratch the surface",
    },
];

export const Skills = () => {
    const items = skills.map((skill) => (
        <div key={skill.name}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: "red", to: "coral" }}
            >
                <skill.icon size={26} />
            </ThemeIcon>
            <Text size="lg" mt="sm" weight={500}>
                {skill.name}
            </Text>
            <Text size="sm">{skill.description}</Text>
        </div>
    ));

    return (
        <Col span={12} md={7}>
            <SimpleGrid
                cols={2}
                spacing={30}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
                {items}
            </SimpleGrid>
        </Col>
    );
};
