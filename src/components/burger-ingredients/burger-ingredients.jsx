import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerSection from './burger-section/burger-section';
import BurgerCard from './burger-card/burger-card';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import { useState, useMemo, useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ingredient } from '../../utils/data';
import { SET_CONSTRUCTOR_INGREDIENTS, SET_CONSTRUCTOR_BUN, setCurrentItem } from '../../services/actions/actions';
import { useDrag } from 'react-dnd';

function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState('Bun')
  // const [observer, setObserver] = useState(null);
  // const [sections, setSections] = useState([]);

  // Создаем рефы для каждого заголовка
  const bunsRef = useRef();
  const saucesRef = useRef();
  const mainRef = useRef();
  const tabsRef = useRef()

  function handleScrollList() {
    const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
    const bunsTop = bunsRef.current?.getBoundingClientRect().top;
    const saucesTop = saucesRef.current?.getBoundingClientRect().top;
    const mainsTop = mainRef.current?.getBoundingClientRect().top;

    if (!tabsBottom || !bunsTop || !saucesTop || !mainsTop) {
      return
    }

    const TabsWithBottomPadding = (tabsBottom + 40)
    const bunsDelta = Math.abs(bunsTop - TabsWithBottomPadding);
    const saucesDelta = Math.abs(saucesTop - TabsWithBottomPadding);
    const mainsDelta = Math.abs(mainsTop - TabsWithBottomPadding);
    const min = Math.min(bunsDelta, saucesDelta, mainsDelta);
    const newTab = min === bunsDelta ? "Bun" : min === saucesDelta ? "Sauce" : "Main";
    if (newTab !== activeTab) {
      setActiveTab(newTab)
    }
  }

  // useEffect(() => {
  //   // Инициализируем Intersection Observer
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveTab(entry.target.dataset.title);
  //         }
  //       });
  //     },
  //     { rootMargin: "-50% 0px -50% 0px" }
  //   );
  //   setObserver(observer);
  //   // Добавляем рефы заголовков в наблюдение
  //   observer.observe(bunsRef.current);
  //   observer.observe(saucesRef.current);
  //   observer.observe(mainRef.current);
  //   // Сохраняем массив секций для обновления состояния компонента
  //   setSections([bunsRef.current, saucesRef.current, mainRef.current]);
  // }, []);
  // console.log(activeTab)
  // // useEffect(() => {
  // //   setSections([bunsRef.current, saucesRef.current, mainRef.current]);
  // // }, [bunsRef, saucesRef, mainRef]);

  // const handleTabClick = (title) => {
  //   setActiveTab(title);
  //   // Прокручиваем к соответствующей секции
  //   const section = sections.find((ref) => ref.dataset.title === title);
  //   section.scrollIntoView({ behavior: "smooth" });
  // };

  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false);
  
  const ingredients = useSelector(state => state.allIngredientsReducer.allIngredients)

  const buns = useMemo(() => ingredients.filter((item) => item.type === ingredient.bun), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((item) => item.type === ingredient.sauce), [ingredients]);
  const main = useMemo(() => ingredients.filter((item) => item.type === ingredient.main), [ingredients]);


  const handleOpenModal = (item) => {
    dispatch(setCurrentItem(item))
    setModalOpen(true);
    item.type === ingredient.bun ? dispatch({type: SET_CONSTRUCTOR_BUN, payload: item}) : dispatch({type: SET_CONSTRUCTOR_INGREDIENTS, payload: item})
  }
  const handleCloseModal = (value) => {
    setModalOpen(value)
    dispatch(setCurrentItem(null))
  };
  
  return (
    <div className={`${styles.container} pt-5`}>
      <div className={styles.tab} ref={tabsRef}>
      <Tab value="Bun" active={activeTab === "Bun"} onClick={setActiveTab}>
        Булки
      </Tab>
      <Tab value="Sauce" active={activeTab === "Sauce"} onClick={setActiveTab}>
        Соусы
      </Tab>
      <Tab value="Main" active={activeTab === "Main"} onClick={setActiveTab}>
        Начинки
      </Tab>
    </div>
      <div className={`${styles.containerScroll} custom-scroll`} onScroll={handleScrollList}>
      <BurgerSection title={"Булки"} ref={bunsRef}>
        {buns.map((item) => (
          <BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
          img={item.image}
          price={item.price}
          description={item.name}
          count={1}
        />
        ))}
      </BurgerSection>

      <BurgerSection title={"Соусы"} ref={saucesRef}>
      {sauces.map((item) => (
          <BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
          img={item.image}
          price={item.price}
          description={item.name}
          count={1}
        />
        ))}
      </BurgerSection>

      <BurgerSection title={"Начинки"} ref={mainRef}>
      {main.map((item) => (
          <BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
          img={item.image}
          price={item.price}
          description={item.name}
          count={1}
        />
        ))}
      </BurgerSection>
      </div>
       {modalOpen && <Modal title="Детали ингредиента" onClose={handleCloseModal}>
        <IngredientDetails></IngredientDetails>
        </Modal>}
    </div>
  );
}
export default BurgerIngredients