import { AuthForm } from '../components/AuthForm'
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  CssBaseline, OutlinedInput, InputAdornment, IconButton
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/styles'
import { FormControl } from '@material-ui/core'
import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import { Visibility, VisibilityOff } from '@material-ui/icons'

// Name      string `json:'name'`
// LastName  string `json:'last_name'`
// Birthdate string `json:'birthdate'`
// Email     string `json:'email'`
// Id        int    `json:'id'`
// Password  string `json:'password'`

const useStyles = makeStyles(
  {
    root: {
      width: '100%',

    },
    formControl: {
      width: '100%'
    },
    formWrap: {
      marginTop: '100px'
    }
  }
)

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр')
    .required('Это обязательное поле')
    .min(2, 'Минимум 2 символа')
    .max(20, 'Максимум 20 символов'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Фамилия не должна содержать цифр')
    .required('Это обязательное поле')
    .min(2, 'Минимум 2 символа')
    .max(20, 'Максимум 20 символов'),
  email: yup
    .string()
    .email('Неправильный Email')
    .required('Это обязательное поле'),
})

export const Register = () => {
  const classes = useStyles()

  const [day, setDay] = React.useState('')
  const [month, setMonth] = React.useState('')
  const [year, setYear] = React.useState('')

  const handleDays = (e: any) => {
    setDay(e.target.value)
  }
  const handleMonths = (e: any) => {
    setMonth(e.target.value)
  }
  const handleYears = (e: any) => {
    setYear(e.target.value)
  }

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({resolver: yupResolver(schema), mode: 'onChange'})

  const test = (data: any) => {
    console.log(data)
    console.log(day, month, year)
  }

  const createDays = (): number[] => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    return days
  }

  const createYears = (): number[] => {
    const years = []
    const currentYear = new Date().getFullYear()

    for (let i = currentYear; i >= 1921; i--) {
      years.push(i)
    }
    return years
  }

  const months: string[] = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
  ]

  // const test1 = async (data: any) => {
  //   const req = await fetch('http://localhost:8080/registration', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   return req.json()
  // }

  return (
    <Container component='main' maxWidth='xs'>
      <div className={ classes.formWrap }>
        <Typography
          align='center'
          component='h3'
          variant='h5'
          // mb={ 2 }
        >
          Регистрация
        </Typography>
        <form
          className={ classes.root }
          onSubmit={ handleSubmit(test) }
        >
          <Grid container>
            <Grid item xs={ 12 }
                  sm={ 6 }
              mb={ 2 } pr={ 0.5 }
            >
              <TextField
                { ...register('name') }
                fullWidth
                id='Name'
                label='Имя'
                autoFocus
                error={ !!errors.name }
                helperText={ errors?.name?.message }
              />
            </Grid>

            <Grid item xs={ 12 }
              sm={ 6 } mb={ 2 } pl={ 0.5 }
            >
              <TextField
                { ...register('lastName') }
                fullWidth
                id='LastName'
                label='Фамилия'
                autoFocus
                error={ !!errors.lastName }
                helperText={ errors?.lastName?.message }
              />
            </Grid>

            <Grid item xs={ 12 } container
              mb={ 2 }
            >
              <Grid item xs={ 4 }
                pr={ 1 }
              >
                <FormControl className={ classes.formControl } variant='outlined'>
                  <InputLabel id='days'>День</InputLabel>
                  <Select
                    { ...register('days') }
                    labelId='days'
                    label='days'
                    value={ day }
                    onChange={ handleDays }
                  >
                    { createDays().map((d) => <MenuItem key={ d } value={ d }>{ d }</MenuItem>) }
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={ 4 }>
                <FormControl className={ classes.formControl } variant='outlined'>
                  <InputLabel id='months'>Месяц</InputLabel>
                  <Select
                    { ...register('months') }
                    labelId='months'
                    label='months'
                    value={ month }
                    onChange={ handleMonths }
                  >
                    { months.map((m) => <MenuItem key={ m } value={ m }>{ m }</MenuItem>) }
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={ 4 }
                pl={ 1 }
              >
                <FormControl className={ classes.formControl } variant='outlined'>
                  <InputLabel id='years'>Год</InputLabel>
                  <Select
                    { ...register('years') }
                    labelId='years'
                    label='years'
                    value={ year }
                    onChange={ handleYears }
                  >
                    { createYears().map((y) => <MenuItem key={ y } value={ y }>{ y }</MenuItem>) }
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={ 12 }
              mb={ 2 }
            >
              <TextField
                { ...register('email') }
                fullWidth
                id='Email'
                label='Email'
                autoFocus
                error={ !!errors.email }
                helperText={ errors?.email?.message }
              />
            </Grid>

            <Grid item xs={ 12 }
              mb={ 2 }
            >
              <TextField
                { ...register('Password') }
                fullWidth
                id='Password'
                label='Пароль'
                autoFocus
                type='password'
              />
            </Grid>

            {/*<Grid item xs={ 12 } mb={ 2 }>*/}
            {/*  <FormControl variant="outlined">*/}
            {/*    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>*/}
            {/*    <OutlinedInput*/}
            {/*      id="outlined-adornment-password"*/}
            {/*      type={values.showPassword ? 'text' : 'password'}*/}
            {/*      value={values.password}*/}
            {/*      onChange={handleChange('password')}*/}
            {/*      endAdornment={*/}
            {/*        <InputAdornment position="end">*/}
            {/*          <IconButton*/}
            {/*            aria-label="toggle password visibility"*/}
            {/*            onClick={handleClickShowPassword}*/}
            {/*            onMouseDown={handleMouseDownPassword}*/}
            {/*            edge="end"*/}
            {/*          >*/}
            {/*            {values.showPassword ? <Visibility /> : <VisibilityOff />}*/}
            {/*          </IconButton>*/}
            {/*        </InputAdornment>*/}
            {/*      }*/}
            {/*      labelWidth={70}*/}
            {/*    />*/}
            {/*  </FormControl>*/}
            {/*</Grid>*/}




            <Grid item xs={ 12 }>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Зарегистрироваться
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}