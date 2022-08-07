import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TeamMembers from "../../components/TeamMembers";
import {
  ChakraProvider,
  theme,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import FadeInUp from "../../components/Anim/FadeInUp";

const Team = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <FadeInUp>
        <Stack minH={"65vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1}>
            <Stack spacing={6} w={"full"} align={"center"}>
              <Text
                mt={"25vh"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                letterSpacing={15.0}
              >
                TEAM GENESIS
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={5.5}
              >
                Such an event could have never been possible without a team like
                TEAM GENESIS
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </FadeInUp>

      <FadeInUp>
        <TeamMembers />
      </FadeInUp>
      <Footer />
    </ChakraProvider>
  );
};

export default Team;
