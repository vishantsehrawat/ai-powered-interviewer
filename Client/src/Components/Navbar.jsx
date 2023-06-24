import React from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Input,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    useToast,
    Img
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon
} from '@chakra-ui/icons';
import { Link as LinkNav, NavLink, useNavigate } from 'react-router-dom';
import { color } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout } from '../Redux/authReducer/action';


// import { Logout } from '../Redux/authReducer/Logout';

export const Navbar = () => {

    const { isOpen, onToggle } = useDisclosure();
    const dispatch = useDispatch();
    const { isAuth, userDetails, isError } = useSelector(
        (store) => store.authReducer
    );
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogout = () => {
        dispatch(Logout()).then((res) => {
            console.log(res);
            if (res.payload.status === 400) {
                toast({
                    title: res.payload.data.error || res.payload.message || '',
                    description: res.payload.data.description || '',
                    status: 'error',
                    duration: 2000,
                    isClosable: false
                });
            } else {
                toast({
                    title: "logout successful",
                    status: 'success',
                    duration: 2000,
                    isClosable: false
                });
                navigate('/');
            }
        });
    };


    return (
        <Box boxShadow={'xl'} mt={'3px'}>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                    alignItems={'center'}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                    alignItems={'center'}
                >
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        <LinkNav to={'/'}>
                            <Img src={"./logo-2.jpg"} w={'100px'} />
                        </LinkNav>
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>

                </Flex>

                {isAuth ? (
                    <Menu>
                        <MenuButton>
                            <Avatar bg='green.200' name={userDetails.usernameforchat} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem bg={'none'} cursor='auto'>
                                Hi, {userDetails.usernameforchat} !!!
                            </MenuItem>
                            {/* <MenuItem onClick={() => navigate("/addpost")}>Create New Blog</MenuItem>
                            <MenuItem onClick={() => navigate('/profile')}>Your Profile</MenuItem> */}
                            <MenuItem><LinkNav to={'/profile'}>Profile</LinkNav></MenuItem>
                            <MenuItem onClick={handleLogout} >Logout</MenuItem>

                        </MenuList>
                    </Menu>
                ) : (
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                    >
                        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
                            <LinkNav to={'/login'}>Sign In</LinkNav>
                        </Button>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            colorScheme={'whatsapp'}
                            bg={"rgb(65, 58, 89)"}
                        >
                            <LinkNav to={'/signup'}>Sign Up</LinkNav>
                        </Button>
                    </Stack>
                )}
            </Flex>


            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
};

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={700}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    colour: "rgb(59, 58, 79)"
                                }}
                            >
                                {/* _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}> */}

                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'green' }}
                        fontWeight={800}
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}
                >
                    <Icon color={'green'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
            _hover={{
                textDecoration: 'none',
                color: 'green'
            }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} fontWeight={800} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    color: 'green'
                }}
            >
                <Text
                    fontWeight={800}
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Category',
        children: [
            {
                label: 'Frontend',

                href: '#'
            },
            {
                label: 'Backend',

                href: '#'
            },
            {
                label: 'Full-Stack',

                href: '#'
            }
        ]
    },
    {
        label: 'Contact'
    },
    {
        label: 'About',
        href: '#'
    },

];




