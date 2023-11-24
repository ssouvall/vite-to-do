import {Card, Container, Grid, rem, SimpleGrid} from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

export default function Home() {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <Container>
            <SimpleGrid cols={{ base: 1, sm: 4 }} spacing="md">
                <Card withBorder radius="md" height={SECONDARY_COL_HEIGHT}>
                    <p>New To-Do's</p>
                </Card>
                <Card withBorder radius="md" height={SECONDARY_COL_HEIGHT}>
                    <p>In-Progress To-Do's</p>
                </Card>
                <Card withBorder radius="md" height={SECONDARY_COL_HEIGHT}>
                    <p>Open To-Do's</p>
                </Card>
                <Card withBorder radius="md" height={SECONDARY_COL_HEIGHT}>
                    <p>Completed To-Do's</p>
                </Card>
            </SimpleGrid>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <Card withBorder radius="md" height={PRIMARY_COL_HEIGHT}>
                    <p>Well hello there</p>
                </Card>
                <Grid gutter="md">
                    <Grid.Col>
                        <Card withBorder radius="md" height={SECONDARY_COL_HEIGHT}>
                            <p>Here's another one</p>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Card withBorder radius="md" height={SECONDARY_COL_HEIGHT}>
                            <p>And another one</p>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Card withBorder radius="md" height={SECONDARY_COL_HEIGHT}>
                            <p>And yet another one</p>
                        </Card>
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>

    )
}
