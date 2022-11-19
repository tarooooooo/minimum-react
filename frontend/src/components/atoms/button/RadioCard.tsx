import { Box, useRadio } from "@chakra-ui/react"
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
}

export const RadioCard: VFC<Props> = memo((props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const { children} = props;

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
});