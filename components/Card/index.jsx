import {
  Box,
  Center,
  Text,
  Stack,
  Link,
  Button,
  Badge,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Card(props) {
  var dates="";
  if(props.status)
   dates = props.status;
  else
  dates = props.dates;
  var status_color = "purple";
  const title = props.title;
  const image = props.image;
  const linkGH = props.linkGH;
  const date = props.date;
  // const time = props.time;
  // const type = props.type;
  // const redirect = props.redirect;
  console.log(linkGH);
  return (
    <Center py={6}>
      <Box
        maxW={"375px"}
        minW={"300px"}
        minH={"500px"}
        w={"full"}
        borderRadius={"10px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        // p={6}
        overflow={"hidden"}
      >
        <Center>
          <Box
            pt={"5"}
            // px={"6"}
            h={"200px"}
            mb={3}
            pos={"relative"}
            bgImage={image}
            bgSize={"cover"}
            boxSize="350px"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          ></Box>
        </Center>
        <Stack px={"5"} paddingBottom={"0rem"}>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            pb={"0.2rem"}
            letterSpacing={1.5}
          >
            <Badge variant="outline" colorScheme={status_color}>
              {dates}
            </Badge>
          </Text>
          <hr />
          <Box>
          <Flex alignItems={"center"}>
            <Text fontSize={"xl"} letterSpacing={1.2}>
              {title}
            </Text>
          </Flex>
          </Box>
          {date?"":<Link href={`/events/${title}`}><Button mt={"0.2rem"} backgroundColor={"#080c2c"} color={"white"} width={"100%"}>Register</Button></Link>}
        </Stack>
        <Text color={"gray.500"} px={"6"} mt={"0.7rem"}>
          {date}
        </Text>
      </Box>
    </Center>
  );
}
