import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ChakraProvider,
  Text,
  Code,
  Stack,
  Flex,
  theme,
} from "@chakra-ui/react";
import FadeInUp from "../components/Anim/FadeInUp";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <FadeInUp>
        <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} align={"center"}>
              <Text
                fontSize={{ base: "3xl", md: "5xl", lg: "70px" }}
                letterSpacing={15.0}
              >
                GENESIS
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={5.5}
              >
                IEEE MUJ brings to you the largest Tech Fest of Manipal
                University Jaipur <Code fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>GENESIS 2022</Code>
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Stack>
          <Events />
        </Stack>
      </FadeInUp>
      <Footer />
    </ChakraProvider>
  );
}