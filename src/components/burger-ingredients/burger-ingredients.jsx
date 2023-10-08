import styles from './burger-ingredients.module.css';
import BurgerTab from './burger-tab/burger-tab';
import BurgerSection from './burger-section/burger-section';
import BurgerCard from './burger-card/burger-card';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import { useState, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ingredient } from '../../utils/data';
import { SET_CONSTRUCTOR_INGREDIENTS, SET_CONSTRUCTOR_BUN, setCurrentItem } from '../../services/actions/actions';
import { useDrag } from 'react-dnd';

function BurgerIngredients() {
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
      <BurgerTab />
      <div className={`${styles.containerScroll} custom-scroll`}>
      <BurgerSection title={"Булки"}>
        {buns.map((item) => (
          <BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
          img={item.image}
          price={item.price}
          description={item.name}
          count={1}
        />
        ))}
      </BurgerSection>

      <BurgerSection title={"Соусы"}>
      {sauces.map((item) => (
          <BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
          img={item.image}
          price={item.price}
          description={item.name}
          count={1}
        />
        ))}
      </BurgerSection>

      <BurgerSection title={"Начинки"}>
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