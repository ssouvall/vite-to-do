import {useDisclosure} from '@mantine/hooks';
import {AppShell, Burger, Group, Skeleton} from '@mantine/core';
import reactImg from '../../assets/react.svg'
import {Header} from "./Header";

export function DashboardShell({headerItems, children}: { headerItems: string[] }) {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            header={{height: 60}}
            navbar={{width: 200, breakpoint: 'sm', collapsed: {mobile: !opened}}}
            padding="md"
        >
            <AppShell.Header>
                {/*<Group h="100%" px="md" justify="space-between">*/}
                {/*    <img src={reactImg} alt='react image'/>*/}
                {/*</Group>*/}
                <Header />
            </AppShell.Header>
            <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false}/>
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
