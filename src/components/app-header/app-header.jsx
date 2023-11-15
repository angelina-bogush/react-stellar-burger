import styles from './app-header.module.css';
import  HeaderLink  from './header-link/header-link';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { PROFILE, HOME, FEED_PATH } from '../../app/router/config/routes';
import { useMatch } from 'react-router-dom';
function AppHeader(){
  const isConstructorActive = useMatch(HOME);
  const isFeedActive = useMatch(FEED_PATH);
  const isProfileActive = useMatch(PROFILE)
return (
  <header className={`${styles.header} p-3`}>
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to={HOME} className={isConstructorActive ? styles.linkActive : styles.link}>
        <HeaderLink>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </HeaderLink>
        </Link>
        <Link to={FEED_PATH} className={isFeedActive ? styles.linkActive : styles.link}>
        <HeaderLink>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default pl-2">
            Лента заказов
          </p>
        </HeaderLink>
        </Link>
      </div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <Link to={PROFILE} className={isProfileActive ? styles.linkActive : styles.link}>
      <HeaderLink>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default pl-2">
          Личный кабинет
        </p>
      </HeaderLink>
      </Link>
    </div>
  </header>
);
}
export default AppHeader