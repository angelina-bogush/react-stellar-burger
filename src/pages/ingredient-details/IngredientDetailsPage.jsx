import styles from "./IngredientDetailPage.module.css";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";

export const IngredientDetailsPage = () => {
  return (
    <div className={styles.container}>
      <IngredientDetails />
    </div>
  );
};
