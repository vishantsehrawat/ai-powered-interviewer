import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
    useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as LinkNav, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function SignupCard() {
    const toast = useToast();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [mobile, setMobile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let payload = {
            name,
            email,
            password,
            mobileNumber: mobile
        };


        axios.post('http://aiinterviewer.onrender.com/user/register', payload)
            .then((res) => {
                toast({
                    title: res.data.message,
                    description: 'Your are registered successfully!',
                    status: 'success',
                    duration: 3000,
                    isClosable: false
                });
                navigate('/login');
            })
            .catch((err) => {
                toast({
                    title: err.response.data.error || err.message,
                    description: err.response.data.description || '',
                    status: 'error',
                    duration: 3000,
                    isClosable: false
                });
            });
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} w={"100%"}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <HStack>
                                <FormControl id='Name' isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormControl>


                            </HStack>

                            <FormControl id='email' isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>

                            <FormControl id='password' isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }
                                        >
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>



                            <FormControl id='mobile' isRequired>
                                <FormLabel>Mobile No.</FormLabel>
                                <Input
                                    type="number"
                                    min={0}
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </FormControl>
                            {/* 
                            <FormControl id='Gender' isRequired>
                                <FormLabel>Gender</FormLabel>
                                <Select
                                    placeholder='Gender'
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value='option1'>male</option>
                                    <option value='option2'>female</option>
                                    <option value='option3'>other</option>
                                </Select>
                            </FormControl> */}

                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText='Submitting'
                                    size='lg'
                                    bg={'teal.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.500'
                                    }}
                                    type='submit'
                                >
                                    {/* <LinkNav to={"/login"}> Sign up</LinkNav> */}
                                    Sign up
                                </Button>
                            </Stack>

                            <Stack pt={6}>
                                <HStack>
                                    <Text align={'center'}>Already a user? </Text>
                                    <LinkNav to={'/login'}>
                                        <Text display={'inline'} color={'blue.400'}>
                                            Login
                                        </Text>
                                    </LinkNav>
                                </HStack>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}
