import { MainContainer } from '../components/MainContainer'
import { AuthForm } from '../components/AuthForm'
import { TextField } from '@material-ui/core'

export const Register = () => {
  return (
    <MainContainer>
      <div>Регистрация</div>
      <AuthForm>
        <TextField></TextField>
      </AuthForm>
    </MainContainer>
  )
};