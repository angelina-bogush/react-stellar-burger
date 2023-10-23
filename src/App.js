
import { LoginPage, RegistrationPage, BurgerConstructorPage } from "./pages";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export const App = () =>  {
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<BurgerConstructorPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
            </Routes>
        </Router>
     );
}

