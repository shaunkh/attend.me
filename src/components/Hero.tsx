import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image as ChakraImage,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"100%"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14, lg: 14, xl: 16 }}
          py={{ base: 10, md: 20 }}
        >
          <Flex
            minWidth="100%"
            alignItems="center"
            justifyContent="space-evenly"
            gap="4"
            paddingX={4}
          >
            <Stack spacing={{ base: 6, md: 8 }}>
              <Heading
                colorScheme="teal"
                color={"teal.400"}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Supercharge
                <br />
                <Text as={"span"} color={"black"}>
                  your next conference
                </Text>
              </Heading>
              <Stack
                direction={"column"}
                spacing={3}
                align={"center"}
                alignSelf={"center"}
                position={"relative"}
              >
                <Button
                  colorScheme={"teal"}
                  rounded={"full"}
                  _light={{ bg: "teal.400" }}
                  _dark={{ bg: "teal.600" }}
                  px={6}
                >
                  Get started
                </Button>
              </Stack>
            </Stack>

            <Container maxW={"50%"} padding={0} margin={0}>
              <ChakraImage
                rounded={"3xl"}
                alt={"Conference meeting"}
                src={"/pexels-jopwell-2422280.jpg"}
                maxW={"100%"}
                objectFit={"cover"}
                margin={"0"}
              />
            </Container>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
