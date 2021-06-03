import { Container } from '@material-ui/core'
import { FC } from 'react'

type Props = {
  children: any
}

export const MainContainer: FC<Props> = ({ children, ...props }) => {
  return (
    <Container
      component='main'
      maxWidth='lg'
      { ...props }
    >
      { children }
    </Container>
  )
}