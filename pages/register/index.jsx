import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer/index";
import FadeInUp from "../../components/Anim/FadeInUp";
import Gevent from "../../components/Events/gindex";
import Timeline from "../../components/Timeline";
import Head from "next/head";
import {
  Box,
  Flex,
  Stack,
  Text,
  ChakraProvider,
  Button,
  theme,
} from "@chakra-ui/react";

const Events = () => {
  return (
    <ChakraProvider theme={theme}>
       <Head>
        <title>GENESIS - Sponsors</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <FadeInUp>
        <Stack
          minH={"55vh"}
          bgColor={""}
          direction={{ base: "column", md: "row" }}
        >
          <Flex p={8} flex={1}>
            <Stack spacing={6} w={"full"} h={"50vh"} align={"center"}>
              <Text
                mt={"20vh"}
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                letterSpacing={13.5}
              >
                REGISTER @ GENESIS 2.0
              </Text>
              <Text
                pt={"3rem"}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={2.0}
              >
                WE ARE SO GRATEFUL FOR YOUR LOVE AND SUPPORT
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Stack>
          <Gevent />
        </Stack>
      </FadeInUp>
      <Footer />
    </ChakraProvider>
  );
};

export default Events;
