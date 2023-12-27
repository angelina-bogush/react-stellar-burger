import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerSection from "./burger-section/burger-section";
import BurgerCard from "./burger-card/burger-card";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { ingredient } from "../../utils/data";
import { useSelector } from "../../services/store/store.types";
import { MutableRefObject, Ref, LegacyRef } from "react";

function BurgerIngredients() {
  const ingredients = useSelector(
    (state) => state.allIngredientsReducer.allIngredients
  );
  localStorage.setItem("ingredients", JSON.stringify(ingredients));
  //выбранные ингредиенты
  const selectedBun = useSelector(
    (state) => state.burgerConstructorReducer.bun
  );
  const selectedIngredients = useSelector(
    (state) => state.burgerConstructorReducer.ingredients
  );

  const buns = useMemo(
    () => ingredients.filter((item) => item.type === ingredient.bun),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((item) => item.type === ingredient.sauce),
    [ingredients]
  );
  const main = useMemo(
    () => ingredients.filter((item) => item.type === ingredient.main),
    [ingredients]
  );

  const [activeTab, setActiveTab] = useState("Bun");
  const bunsRef = useRef<HTMLHeadingElement>(null);
  const saucesRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  function handleScrollIngredients() {
    const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
    const bunTop = bunsRef?.current?.getBoundingClientRect().top;
    const sauceTop = saucesRef.current?.getBoundingClientRect().top;
    const mainTop = mainRef.current?.getBoundingClientRect().top;

    const TabsBottomPadding = Number(tabsBottom) - 50;
    const min = bunTop && sauceTop && mainTop && Math.min(
      Math.abs(bunTop - TabsBottomPadding),
      Math.abs(sauceTop - TabsBottomPadding),
      Math.abs(mainTop - TabsBottomPadding)
    );
    const newTab =
      min === Math.abs(Number(bunTop) - TabsBottomPadding)
        ? "Bun"
        : min === Math.abs(Number(sauceTop) - TabsBottomPadding)
        ? "Sauce"
        : "Main";
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  }
  //логика счетчика

  const totalCount = useCallback(
    (item) => {
      if (selectedBun && item.type === ingredient.bun) {
        return selectedBun._id === item._id ? 2 : 0;
      } else {
        return selectedIngredients.filter(
          (ingred) => ingred.ingredient._id === item._id
        ).length;
      }
    },
    [selectedIngredients, selectedBun]
  );

  return (
    <div className={`${styles.container} pt-5`}>
      <div className={styles.tab} ref={tabsRef}>
        <Tab value="Bun" active={activeTab === "Bun"} onClick={setActiveTab}>
          Булки
        </Tab>
        <Tab
          value="Sauce"
          active={activeTab === "Sauce"}
          onClick={setActiveTab}
        >
          Соусы
        </Tab>
        <Tab value="Main" active={activeTab === "Main"} onClick={setActiveTab}>
          Начинки
        </Tab>
      </div>
      <div
        className={`${styles.containerScroll} custom-scroll`}
        onScroll={handleScrollIngredients}
      >
        <BurgerSection title={"Булки"} ref={bunsRef}>
          {buns.map((item) => (
            <BurgerCard
              key={item._id}
              img={String(item.image)}
              price={item.price}
              description={item.name}
              count={selectedBun !== null ? totalCount(item) : 0}
              item={item}
            />
          ))}
        </BurgerSection>

        <BurgerSection title={"Соусы"} ref={saucesRef}>
          {sauces.map((item) => (
            <BurgerCard
              key={item._id}
              img={String(item.image)}
              price={item.price}
              description={item.name}
              count={selectedIngredients.length !== 0 ? totalCount(item) : 0}
              item={item}
            />
          ))}
        </BurgerSection>

        <BurgerSection title={"Начинки"} ref={mainRef}>
          {main.map((item) => (
            <BurgerCard
              key={item._id}
              img={String(item.image)}
              price={item.price}
              description={item.name}
              count={selectedBun === null ? 0 : totalCount(item)}
              item={item}
            />
          ))}
        </BurgerSection>
      </div>
    </div>
  );
}
export default BurgerIngredients;
