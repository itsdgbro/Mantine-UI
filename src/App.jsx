import './App.css'
import '@mantine/core/styles.css';
import {
  MantineProvider,
  Center,
  Box,
  createTheme,
  Button,
  Text,
  AppShell,
  Burger,
  List,
  ThemeIcon
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Form from './Pages/Form';
import { PersonIcon, ExitIcon, MobileIcon } from '@radix-ui/react-icons'

const theme = createTheme({
  fontFamily: "Inter",
  'mantine-color-scheme': 'red'
})


function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <MantineProvider theme={theme}>
        <AppShell
          header={{ height: 60 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: !opened, mobile: !opened } }}
          padding="md"
        >
          <AppShell.Header >
            <Burger opened={opened} onClick={toggle} size="sm" />
            <div>Logo</div>
          </AppShell.Header>

          <AppShell.Navbar p="md">
            <List
              spacing="md"
              listStyleType='none'
              center
            >
              <List.Item
                icon={
                  <ThemeIcon size={20} color='indigo'>
                    <PersonIcon />
                  </ThemeIcon>
                }
              >
                Profile
              </List.Item>

              <List.Item
                icon={
                  <ThemeIcon size={20} color='indigo' >
                    <MobileIcon />
                  </ThemeIcon>
                }
              >
                Contacts
              </List.Item>

              <List.Item
              icon={
                <ThemeIcon size={20} color='indigo'>
                  <ExitIcon />
                </ThemeIcon>
              }
              >
                Logout
              </List.Item>
            </List>
          </AppShell.Navbar>

          <AppShell.Main >
            <Form />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </>
  )
}

export default App
