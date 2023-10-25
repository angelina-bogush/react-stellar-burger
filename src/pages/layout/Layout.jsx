import AppHeader from "../../components/app-header/app-header";
import styles from './layout.module.css'
import { Outlet } from "react-router-dom";
export const Layout = () => {

    return(
        <div className={styles.container}>
        <AppHeader/>
        <div className={styles.content}>
        <Outlet/>
        </div>
        </div>
    )
}