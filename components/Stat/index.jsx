import React from "react";
import { Box, Text } from "@chakra-ui/react";
import StatGroup from "./StatGroup";

const Stat = () => {
  return (
    <Box px={"10vw"} mb={"7rem"} mt={"-4rem"}>
      <StatGroup />
      <Box
      display={['none', 'none', 'none', 'none', 'flex']}>
      <Text className="scrollIndicator">
        Scroll
      </Text>
      </Box>
    </Box>
  );
};

export default Stat;
