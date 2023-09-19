import './App.css'
import '@mantine/core/styles.css';
import {MantineProvider ,Button} from '@mantine/core';

function App() {
  return (
    <>
    <MantineProvider>
      <Button>Submit</Button>
    </MantineProvider>
    </>
  )
}

export default App
