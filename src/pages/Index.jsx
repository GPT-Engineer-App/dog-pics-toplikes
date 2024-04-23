// Twitter clone UI for displaying the most liked dog pictures of the day
import { Box, Flex, Image, Text, VStack, Heading, IconButton } from "@chakra-ui/react";
import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";

const Index = () => {
  // Sample data for the most liked dog pictures
  const dogTweets = [
    {
      id: 1,
      user: "DogLover",
      image: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZG9nfGVufDB8fHx8MTcxMzg4NjUzMHww&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 150,
      retweets: 30,
      comments: 12,
    },
    {
      id: 2,
      user: "PuppyFan",
      image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwdXBweXxlbnwwfHx8fDE3MTM4ODY1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 120,
      retweets: 25,
      comments: 8,
    },
    {
      id: 3,
      user: "CanineEnthusiast",
      image: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3MTM4ODY1MzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 180,
      retweets: 40,
      comments: 15,
    },
  ];

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl" textAlign="center">
        Today's Top Liked Dog Pictures
      </Heading>
      {dogTweets.map((tweet) => (
        <Box key={tweet.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" width="full">
          <Flex align="center" justify="space-between">
            <Text fontWeight="bold">@{tweet.user}</Text>
            <Flex align="center">
              <IconButton icon={<FaHeart />} aria-label="Like" mr={2} />
              <Text>{tweet.likes}</Text>
            </Flex>
          </Flex>
          <Image src={tweet.image} alt="Dog picture" borderRadius="md" my={4} />
          <Flex justify="space-between">
            <IconButton icon={<FaComment />} aria-label="Comment" />
            <Text>{tweet.comments}</Text>
            <IconButton icon={<FaRetweet />} aria-label="Retweet" />
            <Text>{tweet.retweets}</Text>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};

export default Index;
