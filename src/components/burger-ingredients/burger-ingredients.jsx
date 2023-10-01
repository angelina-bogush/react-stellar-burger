import styles from './burger-ingredients.module.css';
import BurgerTab from './burger-tab/burger-tab';
import BurgerSection from './burger-section/burger-section';
import BurgerCard from './burger-card/burger-card';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import { useState, useMemo, useContext } from 'react';
import { ingredient } from '../../utils/data';
import { IngredientsContext, ConstructorContext } from '../../services/ingredientsContext';

function BurgerIngredients() {
  const {ingredients, setIngredients} = useContext(IngredientsContext);
  const {constructorIngred, setConstructorIngred} = useContext(ConstructorContext);

  const buns = useMemo(() => ingredients.filter((item) => item.type === ingredient.bun), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((item) => item.type === ingredient.sauce), [ingredients]);
  const main = useMemo(() => ingredients.filter((item) => item.type === ingredient.main), [ingredients]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedCard(item);
    setModalOpen(true);
    item.type === ingredient.bun ? setConstructorIngred({...constructorIngred, bun: item}) : setConstructorIngred({...constructorIngred, ingredients: [...constructorIngred.ingredients, item] })

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
export default BurgerIngredients