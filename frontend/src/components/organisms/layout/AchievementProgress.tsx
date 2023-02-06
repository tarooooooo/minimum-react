import { memo } from "react";

type Props = {
  progress: number;
}

export const AchievementProgress = memo((props: Props) => {
  const { progress } = props;
  const outerR = 100;
  const strokeWidth = 15;

  const r: number = outerR - strokeWidth / 2;

  /**
   * 円周
   */
  const circumference: number = 2 * Math.PI * r;

  /**
   * 表示する円周の長さ
   */
  const dashoffset: number = circumference * ((100 - progress) / 100)
  return (
    <>
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
    </>
  )
})