import React from 'react';
import { Button, Flex} from '@mantine/core';
import { Link } from 'react-router-dom';


function Header() {
    return (
            <Flex gap={'md'} c={'white'} pr={15}>
                <Button size='compact-md' fw={'bolder'} bg={"indigo"}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
                        Home    
                    </Link>
                </Button>
                <Button size='compact-md' fw={'bolder'} bg={"indigo"}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>
                        Login
                    </Link>
                </Button>
                <Button size='compact-md' fw={'bolder'} bg={'indigo'}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/form'}>
                        Signup
                    </Link>
                </Button>
            </Flex>
    );
}

export default Header;
