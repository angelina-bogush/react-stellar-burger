import styles from './App.module.css'
import { createBrowserRouter, RouterProvider, Routes, Route, useNavigate} from 'react-router-dom'
import { routerConfig } from "./router/config/routerConfig";
import { useLocation } from 'react-router-dom';
import { BurgerConstructorPage, Layout, LoginPage, ProfilePage } from '../pages';
import { CONSTRUCTOR_PATH, HOME, LOGIN_PATH, PROFILE } from './router/config/routes';
import { PrivateRoute } from './router/providers/PrivateRoute';
import AppHeader from '../components/app-header/app-header';

const router = createBrowserRouter(routerConfig)
export const App = () =>  {
    const location = useLocation()
    const navigate = useNavigate()
    const background = location.state && location.state.background;
    return ( 
        <div className={styles.container}>
        <AppHeader/>
        <Routes locations={background || location}>
        <Route path={HOME} element={ <BurgerConstructorPage/>}/>
        <Route path={PROFILE} element={ <PrivateRoute><ProfilePage/> </PrivateRoute>} />
        {/* <Route path={LOGIN_PATH} element={ <PrivateRoute component={<LoginPage/>}/>}/> */}
        <Route path={LOGIN_PATH} element={<LoginPage/>}/>

        {/* <Route path='/main' element={<PrivateRoute component={<BurgerConstructorPage/>}/>}></Route> */}

        </Routes>
        </div>
    )
}

