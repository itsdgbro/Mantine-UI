import React from 'react';
import { List, ThemeIcon, Title } from '@mantine/core';
import { PersonIcon, MobileIcon, ExitIcon } from '@radix-ui/react-icons';

function Navbar() {
    return (
        <List spacing="xl" listStyleType='none' center size='lg' pt={10}>
            <List.Item icon={<ThemeIcon size={30} color='indigo'><PersonIcon /></ThemeIcon>}>
                <Title order={3}>Profile</Title>
            </List.Item>
            <List.Item icon={<ThemeIcon size={30} color='indigo'><MobileIcon /></ThemeIcon>}>
            <Title order={3}>Contacts</Title>
            </List.Item>
            <List.Item icon={<ThemeIcon size={30} color='indigo'> <ExitIcon /> </ThemeIcon>} >
            <Title order={3}>Logout</Title>
            </List.Item>
        </List>
    );
}

export default Navbar;
