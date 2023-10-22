
import { LoginPage, RegistrationPage, BurgerConstructorPage } from "./pages";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export const App = () =>  {
    return ( 
        <Router>
            <Switch>
                <Route path="/" component={BurgerConstructorPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegistrationPage} />
            </Switch>
        </Router>
     );
}

