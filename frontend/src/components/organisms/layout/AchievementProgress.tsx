import { Box, Divider, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  progress: number;
}

export const AchievementProgress = memo((props: Props) => {
  const { progress } = props;
  const outerR = 100;
  const strokeWidth = 15;

  const r: number = outerR - strokeWidth / 2;
  const circumference: number = 2 * Math.PI * r;
  const dashoffset: number = circumference * ((100 - progress) / 100)
  return (
    <>
      <Box position="relative" width="100%" height="400px" margin="auto">
        <Box position="absolute" right="14%" top="10%">
          <svg
            viewBox="0 0 250 250"
            width="450"
            height="450"
          >
            <circle
              cx="100"
              cy="100"
              r={r}
              stroke="gray"
              stroke-width="15"
              fill="none"
              id="circle"
            />
            <circle
              cx="100"
              cy="100"
              r={r}
              stroke="blue"
              stroke-width="15"
              fill="none"
              id="circle"
              transform={`rotate(-90 100 100)`}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: dashoffset
              }}
            />
          </svg>
        </Box>
        <Box position="absolute" top="36%" right="40%">
          <Text fontSize="80px">{progress}%</Text>
          <Text fontSize='s' color="gray">全クローゼット使用率</Text>
          <Divider borderColor="gray" borderBottomWidth="2px" />
        </Box>
      </Box>
    </>
  )
})