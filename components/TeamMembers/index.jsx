import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Link,
  Text,
} from "@chakra-ui/react";
import members from "./data.js";

import {
  FaLinkedin,
  FaBehanceSquare,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Card = (props) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="250"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={props.image}
          alt={`Picture of ${props.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {props.name}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                {props.position}
              </Box>
              <Box pt={"0.5rem"} pl={"0.75rem"} fontSize={"xl"}>
                <Flex>
                  {props.github !== "" ? (
                    <Link px={"2.5"}>
                      <FaGithub />
                    </Link>
                  ) : null}
                  {props.linkedin !== "" ? (
                    <Link px={"2.5"}>
                      <FaLinkedin />
                    </Link>
                  ) : null}
                  {props.behance !== "" ? (
                    <Link px={"2.5"}>
                      <FaBehanceSquare />
                    </Link>
                  ) : null}
                  {props.instagram !== "" ? (
                    <Link px={"2.5"}>
                      <FaInstagram />
                    </Link>
                  ) : null}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const TeamMembers = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Executive Committee
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "ec" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Tech Team
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "tech" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Disciplinary Committee
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>
          res.team.toLowerCase() === "disciplinary" ? (
            <Card
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          ) : null
        )}
      </SimpleGrid>
    </Box>
  );
};

export default TeamMembers;
