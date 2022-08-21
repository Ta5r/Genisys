import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import {
  Flex,
  Image,
} from "@chakra-ui/react";
import members from "./data.js";

const SpeakerCard = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing={5}
        mx={"15vw"}
      >
        Event Name
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={"1rem"} px={"12vw"}>
        {members.map((res) =>(
            <Card
            key={res.name}
              name={res.name}
              image={res.image}
              position={res.position}
              team={res.team}
            organization = {res.organization}
              github={res.github}
              linkedin={res.linkedin}
              behance={res.behance}
              instagram={res.instagram}
            />
          )
        )}
      </SimpleGrid>
     
    </Box>
  );
};

export default SpeakerCard;


function Card() {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
          'https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Somesh Kumar
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @kumarsomesh_unos
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          WebDeveloper, coder, musician and artist.
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Blockchain
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #CyberSecurity
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #WebDevelopment
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            LinkedIn
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Instagram
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}