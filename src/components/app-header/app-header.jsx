import styles from './app-header.module.css';
import  HeaderLink  from './header-link/header-link';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { PROFILE } from '../../app/router/config/routes';
import { HOME } from '../../app/router/config/routes';
function AppHeader(){
return (
  <header className={`${styles.header} p-3`}>
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to={HOME} className={styles.linkContainer}>
        <HeaderLink>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </HeaderLink>
        </Link>
        <HeaderLink>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pl-2">
            Лента заказов
          </p>
        </HeaderLink>
      </div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <Link to={PROFILE} className={styles.link}>
      <HeaderLink>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pl-2">
          Личный кабинет
        </p>
      </HeaderLink>
      </Link>
    </div>
  </header>
);
}
export default AppHeader