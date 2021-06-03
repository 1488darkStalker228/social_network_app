import { Route, Switch } from 'react-router-dom'
import { Register } from './views/Register'
import { Login } from './views/Login'

export default function App() {
  return (
    <Switch>
      <Route path='/register' render={ () => <Register/> }/>
      <Route path='/login' render={ () => <Login/> }/>
    </Switch>
  );
}
