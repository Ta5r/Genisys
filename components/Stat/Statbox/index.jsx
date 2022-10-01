import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

const StatBox = ({ numtext, subtext, visible }) => {
  const counterRef = useRef();
  const currency = subtext === "Prize Pool" ? "Rs." : "";

  useEffect(() => {
    if (visible) {
      const node = counterRef.current;
      const num = parseInt(numtext, 10);

      const postFix = numtext.replace(num, "");

      const controls = animate(0, num, {
        duration: 2,
        onUpdate(val) {
          node.textContent = val.toFixed(0);
        },
        onComplete() {
          node.textContent += postFix;
          controls.stop();
        },
      });
    }
  }, [visible, numtext]);

  return (
    <Box
      p={"5rem"}
      mt={"-2rem"}
      rounded="lg"
      border="2px dashed"
      borderColor={"white"}
    //   borderColor={"gray.700"}
      //   borderColor="gray.200"
      //   css={{ backdropFilter: "blur(8px)" }}
      bgColor={"#080c2c"}
      boxSizing="border-box"
    >
      <VStack justify="center" height="100%">
        <Flex>
          <Text fontSize="3xl" color={"#fff"}>
            {currency}
          </Text>
          <Heading ref={counterRef} size="xl" color={"#fff"}>
            {currency} 0
          </Heading>
        </Flex>
        <Heading size="md" color={"#fff"}>
          {subtext}
        </Heading>
      </VStack>
    </Box>
  );
};

export default StatBox;
