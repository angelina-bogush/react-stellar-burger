import styles from './app-header.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader(){


return(
<header className={styles.header}>
<span className={`${styles.constructor} pl-5 pr-5 pb-5 pt-5`}>
<BurgerIcon type="primary" />
<p className="text text_type_main-default pl-2">
  Конструктор
</p>
</span>

<span className={`${styles.constructor} pl-5 pr-5 pb-5 pt-5`}>
<ListIcon type="secondary"/>
<p className="text text_type_main-default text_color_inactive pl-2">
 Лента заказов
</p>
</span>

<Logo/>


</header>
)


}
export default AppHeader