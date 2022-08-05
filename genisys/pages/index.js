import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Events from '../components/Events'
import Navbar from '../components/Navbar'
import { ColorModeScript } from '@chakra-ui/react'
import {
  ChakraProvider,
  Text,
  Stack,
  Flex,
  Heading,
  theme,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      {/* <Image layout={"fill"} src={"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/> */}
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          </Heading>
        </Stack>
      </Flex>     
    </Stack>
    <Stack>
      <Events/>
    </Stack>
  </ChakraProvider>
  )
}
