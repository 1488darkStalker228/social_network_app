import { FC } from 'react'

type Props = {
  children: any
}

export const AuthForm: FC<Props> = ({ children, ...props }) => {
  return (
    <form {...props}>
      { children }
    </form>
  )
};