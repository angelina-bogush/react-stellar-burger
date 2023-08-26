import styles from './app-header.module.css';
import  HeaderLink  from './header-link/header-link';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader(){

return (
  <header className={`${styles.header} p-4`}>
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <HeaderLink>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </HeaderLink>
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

      <HeaderLink>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pl-2">
          Личный кабинет
        </p>
      </HeaderLink>
    </div>
  </header>
);
}
export default AppHeader