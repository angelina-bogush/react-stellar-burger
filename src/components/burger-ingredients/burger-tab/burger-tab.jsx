import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './burger-tab.module.css'
const BurgerTab = () => {
  const [current, setCurrent] = React.useState("Bun");
  return (
    <div className={styles.container}>
      <Tab value="Bun" active={current === "Bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Sauce" active={current === "Sauce"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Main" active={current === "Main"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};
export default BurgerTab;
