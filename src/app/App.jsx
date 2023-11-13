import styles from './App.module.css'
import { Routes, Route, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { BurgerConstructorPage, ForgotPasswordPage, IngredientDetailsPage, Layout, LoginPage, ProfilePage, RegistrationPage, ResetPasswordPage } from '../pages';
import { FORGOT_PASSWORD, HOME, INGREDIENT_INFO_PATH, LOGIN_PATH, PROFILE, REGISTRATION_PATH, RESET_PASSWORD } from './router/config/routes';
import { PrivateRoute } from './router/providers/PrivateRoute';
import AppHeader from '../components/app-header/app-header';
import { PublicRoute } from './router/providers/PublicRoute';
import IngredientDetails from '../components/modal/ingredient-details/ingredient-details';
import Modal from '../components/modal/modal';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../services/actions/ingredients';
import { useEffect } from 'react';
import { isUserAuth } from '../utils/func';

export const App = () =>  {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const handleCloseModal = () => {
        navigate(-1);
    };
    localStorage.removeItem('accessToken')
    useEffect(() => {
        dispatch(getIngredients())
    }, [])
    console.log(isUserAuth())
    const background = location.state && location.state.background;
    return ( 
        <div className={styles.container}>
        <AppHeader/>
        <Routes locations={background || location}>
        <Route path={HOME} element={ <BurgerConstructorPage/>}/>
        <Route path={PROFILE} element={ <PrivateRoute><ProfilePage/> </PrivateRoute>} />
        <Route path={INGREDIENT_INFO_PATH} element={<IngredientDetailsPage/>}/>
        <Route path={REGISTRATION_PATH} element={<PublicRoute><RegistrationPage/></PublicRoute>}/>
        <Route path={LOGIN_PATH} element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path={FORGOT_PASSWORD} element={<PublicRoute><ForgotPasswordPage/></PublicRoute>}/>
        <Route path={RESET_PASSWORD} element={<PublicRoute><ResetPasswordPage/></PublicRoute>}/>

        </Routes>

        {background && 
                <Routes>
                    <Route
                        path={INGREDIENT_INFO_PATH}
                        element={
                            <Modal title={"Детали ингредиентов"} onClose={handleCloseModal}>
                                <IngredientDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            }
        </div>
    )
}

