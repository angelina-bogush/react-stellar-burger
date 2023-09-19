import styles from './burger-ingredients.module.css';
import BurgerTab from './burger-tab/burger-tab';
import BurgerSection from './burger-section/burger-section';
import BurgerCard from './burger-card/burger-card';
import PropTypes from "prop-types";
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import { useState, useMemo, useContext } from 'react';
import { ingredient } from '../../utils/data';
import { IngredientsContext } from '../../services/ingredientsContext';

function BurgerIngredients() {
  const {ingredients, setIngredients} = useContext(IngredientsContext)
  const buns = useMemo(() => ingredients.filter((item) => item.type === ingredient.bun), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((item) => item.type === ingredient.sauce), [ingredients]);
  const main = useMemo(() => ingredients.filter((item) => item.type === ingredient.main), [ingredients]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleOpenModal = (item) => {
    setSelectedCard(item)
    setModalOpen(true)

  }
  const handleCloseModal = (value) => {
    setModalOpen(value)
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
        <IngredientDetails data={selectedCard}></IngredientDetails>
        </Modal>}
    </div>
  );
}
BurgerIngredients.propTypes = {
  ingred: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  )
};
export default BurgerIngredients