import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerSection from "./burger-section/burger-section";
import BurgerCard from "./burger-card/burger-card";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ingredient } from "../../utils/data";
import { setCurrentItem } from "../../services/actions/current-item";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getCurrentItem } from "../../utils/func";

function BurgerIngredients() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [modalOpen, setModalOpen] = useState(false);
  const ingredients = useSelector(
    (state) => state.allIngredientsReducer.allIngredients
  );
  localStorage.setItem('ingredients', JSON.stringify(ingredients))
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
  // let {id} = useParams()
  const handleOpenModal = (item) => {
    localStorage.setItem('isCardClicked', true)
    localStorage.setItem("currentIngredient", JSON.stringify(item));
    dispatch(setCurrentItem(item));
    setModalOpen(true);
    navigate(`/ingredients/${item._id}`, { state: { from: "click" } });
  };
  const handleCloseModal = (value) => {
    navigate("/main");
    localStorage.removeItem('currentIngredient')
    localStorage.setItem('isCardClicked', false)
    setModalOpen(value);
    dispatch(setCurrentItem(null))
  };
  const [activeTab, setActiveTab] = useState("Bun");
  const bunsRef = useRef();
  const saucesRef = useRef();
  const mainRef = useRef();
  const tabsRef = useRef();

  function handleScrollIngredients() {
    const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
    const bunTop = bunsRef.current?.getBoundingClientRect().top;
    const sauceTop = saucesRef.current?.getBoundingClientRect().top;
    const mainTop = mainRef.current?.getBoundingClientRect().top;

    const TabsBottomPadding = tabsBottom - 50;
    const min = Math.min(
      Math.abs(bunTop - TabsBottomPadding),
      Math.abs(sauceTop - TabsBottomPadding),
      Math.abs(mainTop - TabsBottomPadding)
    );
    const newTab =
      min === Math.abs(bunTop - TabsBottomPadding)
        ? "Bun"
        : min === Math.abs(sauceTop - TabsBottomPadding)
        ? "Sauce"
        : "Main";
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  }
  useEffect(() => {
    const savedIngredient = JSON.parse(
    localStorage.getItem("currentIngredient"));
    dispatch(setCurrentItem(savedIngredient));
   if(savedIngredient) setModalOpen(true)
    // navigate(`/ingredients/${savedIngredient._id}`);
  return () => {
    localStorage.removeItem('isCardClicked')
  }
  }, [dispatch]);

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
              onClick={() => handleOpenModal(item)}
              img={item.image}
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
              onClick={() => handleOpenModal(item)}
              img={item.image}
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
              onClick={() => handleOpenModal(item)}
              img={item.image}
              price={item.price}
              description={item.name}
              count={selectedBun === null ? 0 : totalCount(item)}
              item={item}
            />
          ))}
        </BurgerSection>
      </div>
      {modalOpen && (
        <Modal title="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails></IngredientDetails>
        </Modal>
      )}
    </div>
  );
}
export default BurgerIngredients;
