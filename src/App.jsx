import './App.css'
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  MantineProvider,
  createTheme,
  AppShell,
  Title,
  Burger,
  Flex,
  Center,
  BackgroundImage,
} from '@mantine/core';
import Header from './Header/Header';
import Navbar from './Header/NavBar';
import Home from './Pages/Home';
import background from './Images/Background.gif'
import homeBg from './Images/Home.gif'
import { useEffect, useState } from 'react';

const theme = createTheme({
  fontFamily: "Inter",
  'mantine-color-scheme': 'red'
})


function App() {
  const [opened, { toggle }] = useDisclosure();
  const [backgroundImage, setBackgroundImage] = useState(homeBg);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setBackgroundImage(homeBg);
    } else {
      setBackgroundImage(background);
    }
  }, [location]); 

  return (
    <>
      <MantineProvider theme={theme}>
        <BackgroundImage src={backgroundImage}>
          <AppShell
            header={{ height: 70 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: !opened, mobile: !opened } }}
            padding="md"
            h={'100vh'}
          >
            <AppShell.Header>
              <Flex direction={'row'} justify={'space-between'} align={'center'}>
                <Flex direction={'column'} pl={10} align={'flex-start'}>
                  <Burger opened={opened} onClick={toggle} size="md" />
                  <Title order={3}>Logo</Title>
                </Flex>
                <Header opened={opened} onToggle={toggle} />
              </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">
              <Navbar />
            </AppShell.Navbar>


            <AppShell.Main h={'100vh'}>
              <Center h={'100%'}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/form' element={<Signup />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </Center>
            </AppShell.Main>
          </AppShell>
        </BackgroundImage>
      </MantineProvider>
    </>
  )
}

export default App
