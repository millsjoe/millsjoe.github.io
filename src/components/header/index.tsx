import {
    ActionIcon,
    Avatar,
    Center,
    createStyles,
    Grid,
    Group,
    Stack,
    Text,
    Title,
    useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import {
    Sun,
    MoonStars,
    BrandTwitter,
    BrandGithub,
    BrandLinkedin,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    subtitle: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
    },
}));
const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const { classes } = useStyles();
    return (
        <header>
            <Center>
                <ActionIcon
                    variant="outline"
                    color={colorScheme === "dark" ? "yellow" : "blue"}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {colorScheme === "dark" ? (
                        <Sun size={18} />
                    ) : (
                        <MoonStars size={18} />
                    )}
                </ActionIcon>
            </Center>
            <Title className={classes.title}>Hi, Im Joe </Title>
            <Text className={classes.subtitle}>Full stack developer</Text>
            <Stack>
                <Group spacing="lg">
                    <ActionIcon<"a">
                        component="a"
                        href="https://www.twitter.com/IamJoeMills"
                    >
                        <BrandTwitter />
                    </ActionIcon>

                    <ActionIcon<"a">
                        component="a"
                        href="https://www.github.com/millsjoe"
                    >
                        <BrandGithub />
                    </ActionIcon>

                    <ActionIcon<"a">
                        component="a"
                        href="https://www.linkedin.com/in/joe-mills/"
                    >
                        <BrandLinkedin />
                    </ActionIcon>
                    {/* <Avatar src="avatar.jpeg" radius="sm" /> */}
                </Group>
            </Stack>
        </header>
    );
};

export default React.memo(Header);
