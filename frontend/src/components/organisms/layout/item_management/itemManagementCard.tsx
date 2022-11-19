import { Stack, Image, Text, Box, Divider } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  id: string;
  onClick: (id: string) => void;
  index: number;
  upperLimit: number;
  categoryName: string;
};

export const ItemManagementCard: VFC<Props> = memo((props: Props) => {
  const {onClick, id, index, upperLimit, categoryName } = props;
  const radioButtonColors = ['teal.50', 'teal.100', 'teal.200']

  return (
    <Box bg={`${radioButtonColors[index]}`} w={[300, 400, 500]} p={4} borderRadius="md" shadow="md" key={index} mx="auto" onClick={() => onClick(id)} cursor="pointer">
    <Text fontSize='md' align="center" fontWeight="bold">{categoryName}</Text>
    <Divider my={4} />
    <Text flexWrap="nowrap" fontSize='3xl' align="center" fontWeight="bold">{upperLimit}</Text>
  </Box>
  );
});
