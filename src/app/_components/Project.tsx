import {
    Image,
    Card,
    CardBody,
    Grid,
    GridItem,
    Heading,
    VStack,
    Button,
    Center,
    Badge,
    Box,
    Text,
} from "@chakra-ui/react";

function Project() {
    const projects = [
        {
            id: "1",
            imageUrl:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            name: "JUSTDOIT",
            overview: "A Web App for creating and joining public challenges",
            stack: ["nuxt", "tailwindcss", "nestjs", "turborepo", "prismaORM"],
        },
        {
            id: "2",
            imageUrl:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            name: "JUSTDOIT",
            overview: "A Web App for creating and joining public challenges",
            stack: ["nuxt", "tailwindcss", "nestjs", "turborepo"],
        },
        {
            id: "3",
            imageUrl:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            name: "JUSTDOIT",
            overview: "A Web App for creating and joining public challenges",
            stack: ["nuxt", "tailwindcss", "nestjs", "turborepo"],
        },
    ];

    return (
        <VStack spacing={14} width="full" padding={{ base: 5, md: 0 }}>
            <Heading size="lg" textAlign="center">
                Projects
            </Heading>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={8}>
                {projects.map((project) => (
                    <GridItem key={project.id}>
                        <Card rounded="lg">
                            <CardBody>
                                <Image
                                    src={project.imageUrl}
                                    alt="Green double couch with wooden legs"
                                    borderRadius="lg"
                                />
                                <VStack mt={4} spacing={4}>
                                    <Heading size="md">{project.name}</Heading>
                                    <Text color="gray.500" fontSize="sm">
                                        {project.overview}
                                    </Text>
                                    <Box>
                                        {project.stack.map((st) => (
                                            <Badge
                                                key={st}
                                                mr={2}
                                                mb={2}
                                                colorScheme="cyan"
                                                px={2}
                                                py={0.5}
                                                rounded="full"
                                                display="inline-flex"
                                            >
                                                {st}
                                            </Badge>
                                        ))}
                                    </Box>
                                    <Center>
                                        <Button variant="outline" size="sm">
                                            Read More
                                        </Button>
                                    </Center>
                                </VStack>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </VStack>
    );
}

export default Project;