import React from "react";
import Link from "next/link";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Button,
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
const Navbar = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        position={"fixed"}
        w={"100vw"}
        css={{ backdropFilter: "blur(8px)" }}
        zIndex={"1"}
        borderBottom={"1px solid white"}
      >
        <Flex align="space-between">
          <Text
            fontSize={"28px"}
            fontWeight={"800"}
            p={"4"}
            letterSpacing={8.0}
          >
            GENESIS
          </Text>
          <Spacer />
          <Link href="/">
            <Text
              p={"4"}
              pt={"8"}
              letterSpacing={8.0}
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              HOME
            </Text>
          </Link>

          <Link href="/events">
            <Text
              p={"4"}
              pt={"8"}
              letterSpacing={8.0}
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              EVENTS
            </Text>
          </Link>

          <Link href="/sponsors">
            <Text
              p={"4"}
              pt={"8"}
              letterSpacing={8.0}
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              SPONSORS
            </Text>
          </Link>

          <Link href="/team">
            <Text
              p={"4"}
              pt={"8"}
              letterSpacing={8.0}
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              OUR TEAM
            </Text>
          </Link>
          <Spacer />

          <Button mt={"5"} mr={"10"} p={"4"} letterSpacing={4.0}>
            REGISTER
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Navbar;
