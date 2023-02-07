import { Box, Divider, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  progress: number;
  outerR: number;
  strokeWidth: number;
  color: string;
}

export const AchievementProgress = memo((props: Props) => {
  const { progress, outerR, strokeWidth, color } = props;

  const size: number = outerR * 2;


  const r: number = outerR - strokeWidth / 2;
  const circumference: number = 2 * Math.PI * r;
  const dashoffset: number = circumference * ((100 - progress) / 100)
  return (
    <>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{margin: "0 auto"}}
      >
        <circle
          cx={outerR}
          cy={outerR}
          r={r}
          stroke="lightgray"
          stroke-width={strokeWidth}
          fill="none"
          id="circle"
        />
        <circle
          cx={outerR}
          cy={outerR}
          r={r}
          stroke={color}
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
    </>
  )
})