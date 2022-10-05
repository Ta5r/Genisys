import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer/index";
import TeamMembers from "../../components/TeamMembers";
import {
  ChakraProvider,
  theme,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import Head from 'next/head';
import FadeInUp from "../../components/Anim/FadeInUp";

const Team = () => {
  return (
    <ChakraProvider theme={theme}>
       <Head>
        <title>Team - GENESIS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <FadeInUp>
        <Stack minH={"55vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={5} flex={1}>
            <Stack spacing={6} w={"full"} align={"center"}>
              <Text
                mt={"20vh"}
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                letterSpacing={13.5}
              >
                TEAM GENESIS 2.0
              </Text>
              <Text
              pt={"2rem"}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={1.5}
              >
                Such an event could have never been possible without a team like
                TEAM GENESIS.
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <TeamMembers />
      </FadeInUp>
      <Footer />
    </ChakraProvider>
  );
};

export default Team;
