import React from "react";
import { Box, Text, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box
      position={"fixed"}
      w={"100vw"}
      backdropBlur={"5px"}
      backdropFilter={"5px"}
      css={{ backdropFilter: "blur(6px)" }}
      zIndex={"10"}
    >
      <Flex align="space-between">
        <Heading p={"4"} letterSpacing={8.0}>
          GENESYS
        </Heading>
        <Spacer />
        <Text p={"4"} pt={"8"} letterSpacing={8.0}>
          HOME
        </Text>

        <Text p={"4"} pt={"8"} letterSpacing={8.0}>
          EVENTS
        </Text>

        <Text p={"4"} pt={"8"} letterSpacing={8.0}>
          SPONSORS
        </Text>

        <Text p={"4"} pt={"8"} letterSpacing={6.0}>
          OUR TEAM
        </Text>
        <Spacer />

        <Button mr={"10"} p={"4"} letterSpacing={4.0}>
          REGISTER
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
