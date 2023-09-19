import { useForm } from '@mantine/form';
import {
    TextInput,
    Select,
    Button,
    Group,
    Box,
    Text,
    Flex
} from '@mantine/core';

export default function Form() {
    
    const form = useForm({
        initialValues: {
          name: '',
          email: '',
          gender: 'Male'
        },
        validate: {
          name: (value) => {
            if (!value) {
              return 'Name is required';
            }
            if (value.length <= 2){
                return 'Name must have at least 3 letters'
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
      


    return (
        <Box bg={'indigo'} c={'White'} p={5} pb={20}>
            <form onSubmit={form.onSubmit(console.log)}>
                <Group p={20}>
                    <Text fz={'xl'}>Form</Text>
                    <Flex
                        mih={50}
                        gap="lg"
                        justify="flex-start"
                        direction="column"
                        wrap="wrap"
                        w={'100%'}
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
                        <Select
                            withAsterisk
                            label="Gender"
                            placeholder='Male'
                            data={['Male', 'Female']}
                            {...form.getInputProps('gender')}
                        />
                        <Button bg={'dark.4'} type='submit'>Submit</Button>
                    </Flex>
                </Group>
            </form>
        </Box>
    );
}
