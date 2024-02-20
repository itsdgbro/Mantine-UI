import { TextInput, Flex, Button, Paper, Notification, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { IconX, IconCheck } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [notification, setNotification] = useState(null);
  const xIcon = <IconX />;
  const cIcon = <IconCheck />;
  const user = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (value.length === 0 ? 'Required' : null),
      password: (value) => (value.length === 0 ? 'Required' : null)
    }
  })
  let navigate = useNavigate();
  const handleSubmit = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const foundUser = storedUsers.find(users => users.email === user.values.email && users.password === user.values.password);

    if (foundUser) {
      setNotification(
        <Notification icon={cIcon} c={'teal'} color="teal" radius="md" title='Success'>
          Logging...
        </Notification>
      );
      setTimeout(() => {
        setNotification(null);
        navigate('/dashboard')
      }, 1500); // Hide notification after 3 seconds
    } else {
      setNotification(
        <Notification icon={xIcon} c={'red'} color="red" radius="md" title='Error'>
          Email or Password Incorrect
        </Notification>
      );

      setTimeout(() => {
        setNotification(null);
      }, 1500); // Hide notification after 3 seconds
    }
  }


  return (
    <div>
      <Box pb={10}>
        {notification}
      </Box>
      <Paper radius={'lg'} bg={'rgba(255, 255, 255, 0.5)'} p={30}>
        <form onSubmit={user.onSubmit(handleSubmit)}>
          <Flex direction={'column'} c={'indigo'} gap="lg" >
            <TextInput label={"Email"} placeholder="email@gmail.com" {...user.getInputProps('email')} />
            <TextInput label={"Password"} placeholder="password" {...user.getInputProps('password')} />
            <Button type="submit" bg='dark.4'>
              Login
            </Button>
          </Flex>
        </form>
      </Paper>
    </div>
  )
}
export default Login;
