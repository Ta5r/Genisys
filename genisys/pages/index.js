import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Events from '../components/Events'
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
    <ChakraProvider theme={theme} backgroundColor={"red"}>
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          </Heading>
        </Stack>
      </Flex>
     
    </Stack>
    <Stack backgroundColor={"#fff"}>
    {/* <Stack backgroundColor={"#e5e6e6"}> */}
      <br/>
      <br/>
      <br/>
      <Events/>
    </Stack>
  </ChakraProvider>
  )
}
