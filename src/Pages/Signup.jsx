import { useForm } from '@mantine/form';
import {
  TextInput,
  Select,
  Button,
  Group,
  Box,
  Flex,
  Center,
  Title,
  Paper
} from '@mantine/core';
import StoreUsers from '../TempDataBase/StoreUsers';


export default function Signup() {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      gender: 'Male'
    },
    validate: {
      name: (value) => {
        if (!value) {
          return 'Name is required';
        }
        if (value.length <= 2) {
          return 'Name must have at least 3 letters'
        }
        return null; // No error
      },
      password: (value) => {
        if (!value) {
          return 'Password is required';
        }
        if (value.length < 4) {
          return 'Password must have at least 4 letters'
        }
        return null; // No error
      },
      email: (value) => {
        if (!value) {
          return 'Email is required';
        }
        if (!/^\S+@\S+$/.test(value)) {
          return 'Invalid email address';
        }
        return null; // No error
      }
    }
  })

  const handleSubmit = () => {
    StoreUsers.addUser(form.values.name, form.values.email, form.values.password, form.values.gender);
    console.log(StoreUsers.getUsers());
  }

  return (
    <Paper radius={'lg'} p={50} c={'indigo'} bg={'rgba(255, 255, 255, 0.5)'}>
      <Center>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Title ta={'center'}>Form</Title>
          <Flex
            mih={50}
            gap="lg"
            justify="flex-start"
            direction="column"
          >
            <TextInput
              label="Name"
              withAsterisk
              placeholder='name'
              id='name'
              {...form.getInputProps('name')}
            />
            <TextInput
              label='Email'
              placeholder='email'
              id='email'
              withAsterisk
              {...form.getInputProps('email')}
            />
            <TextInput
              label='Password'
              placeholder='password'
              id='password'
              withAsterisk
              {...form.getInputProps('password')}
            />
            <Select
              withAsterisk
              label="Gender"
              placeholder='Male'
              data={['Male', 'Female']}
              {...form.getInputProps('gender')}
            />
            <Button bg={'dark.4'} type='submit'>Submit</Button>
          </Flex>
        </form>
      </Center>
    </Paper>
  );
}
