import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerTab from './burger-tab/burger-tab';
import BurgerSection from './burger-section/burger-section';
import BurgerCard from './burger-card/burger-card';
import blueImgPath from '../../images/blue.png';
import pinkImgPath from '../../images/pink.png';
function BurgerIngredients() {
  return (
    <div className={`${styles.container} pt-5`}>
      <BurgerTab />
      <div className={`${styles.containerScroll} custom-scroll`}>
      <BurgerSection title={"Булки"}>
        <BurgerCard
          img={blueImgPath}
          alt={"голубая булка"}
          price={20}
          description={"Краторная булка N-200i"}
        />
        <BurgerCard
          img={pinkImgPath}
          alt={"Флюоресцентная булка R2-D3"}
          price={20}
          description={"Флюоресцентная булка R2-D3"}
        />
      </BurgerSection>

      <BurgerSection title={"Соусы"}>
        <BurgerCard
          img={blueImgPath}
          alt={"Соус Spicy-X"}
          price={30}
          description={"Соус Spicy-X"}
        />
        <BurgerCard
          img={pinkImgPath}
          alt={"Соус фирменный Space Sauce"}
          price={30}
          description={"Соус фирменный Space Sauce"}
        />
      </BurgerSection>
      </div>
    </div>
  );
}
export default BurgerIngredients