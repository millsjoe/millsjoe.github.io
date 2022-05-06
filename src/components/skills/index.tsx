import {
    CSSObject,
    MediaQuery,
    SimpleGrid,
    Text,
    ThemeIcon,
    useMantineColorScheme,
} from "@mantine/core";
import { FaAws, FaGithub } from "react-icons/fa";
import {
    SiApple,
    SiC,
    SiDocker,
    SiJenkins,
    SiKotlin,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPerl,
    SiPython,
    SiReact,
    SiTypescript,
} from "react-icons/si";

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
        icon: SiNextdotjs,
        name: "NextJS",
        description: "Just take this site for example",
    },
    {
        icon: SiNodedotjs,
        name: "Node.JS",
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
    {
        icon: SiDocker,
        name: "Docker",
        description: "Docker and containerisation is magic that I'm here for",
    },
    {
        icon: SiMongodb,
        name: "MongoDB",
        description: "I like mongodb, its simple and easy",
    },
    {
        icon: SiMysql,
        name: "SQL",
        description: "I don't like SQL, its painful and tiresome",
    },
    {
        icon: FaGithub,
        name: "Github",
        description: "Github and version control in general is a good idea",
    },
    {
        icon: SiLinux,
        name: "Linux",
        description: "Linux is fantastic",
    },
    {
        icon: SiApple,
        name: "MacOS",
        description: "MacOS is also fantastic",
    },
];

export const Skills = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const style: CSSObject = {
        display: "none",
    };
    const items = skills.map((skill) => (
        <div key={skill.name}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={
                    dark
                        ? { deg: 133, from: "red", to: "coral" }
                        : { deg: 133, from: "blue", to: "cyan" }
                }
            >
                <skill.icon size={26} />
            </ThemeIcon>
            <MediaQuery smallerThan="md" styles={style}>
                <Text size="lg" mt="sm" weight={500}>
                    {skill.name}
                </Text>
            </MediaQuery>
        </div>
    ));

    return (
        <SimpleGrid
            breakpoints={[
                { minWidth: "xs", maxWidth: "md", cols: 3, spacing: 10 },
                { minWidth: "lg", cols: 4, spacing: 20 },
            ]}
        >
            {items}
        </SimpleGrid>
    );
};
