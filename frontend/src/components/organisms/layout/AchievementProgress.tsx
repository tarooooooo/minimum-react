import { Box, Divider, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  progress: number;
  outerR: number;
  strokeWidth: number;
}

export const AchievementProgress = memo((props: Props) => {
  const { progress, outerR, strokeWidth } = props;

  const size: number = outerR * 2;


  const r: number = outerR - strokeWidth / 2;
  const circumference: number = 2 * Math.PI * r;
  const dashoffset: number = circumference * ((100 - progress) / 100)
  return (
    <>
      <Box position="relative" width="100%" height="400px" margin="auto">
        <Box position="absolute" right="14%" top="10%">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            height={size}
          >
            <circle
              cx={outerR}
              cy={outerR}
              r={r}
              stroke="gray"
              stroke-width={strokeWidth}
              fill="none"
              id="circle"
            />
            <circle
              cx={outerR}
              cy={outerR}
              r={r}
              stroke="blue"
              stroke-width={strokeWidth}
              fill="none"
              id="circle"
              transform={`rotate(-90 ${outerR} ${outerR})`}
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