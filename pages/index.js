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
  Box,
} from "@chakra-ui/react";
import FadeInUp from "../components/Anim/FadeInUp";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box>
        <video
          class="videolc"
          id="bg-video"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source
            src="https://video-previews.elements.envatousercontent.com/h264-video-previews/8bc2eb2a-6288-46a0-9873-b1ffeefc00dd/37359639.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <FadeInUp>
        <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} align={"center"}>
              <Text
                fontSize={{ base: "3xl", md: "5xl", lg: "70px" }}
                letterSpacing={15.0}
                backgroundColor={"#fff"}
                px={"3rem"}
              >
                GENESIS
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                letterSpacing={5.5}
                backgroundColor={"#fff"}
                px={"3rem"}
              >
                IEEE MUJ brings to you the largest Tech Fest of Manipal
                University Jaipur{" "}
                <Code fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                  GENESIS 2022
                </Code>
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
