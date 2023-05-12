import Link from 'next/link';
import { Flex, Box } from '@chakra-ui/react';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Real Estate</Link>
    </Box>
  </Flex>
);

export default Navbar;