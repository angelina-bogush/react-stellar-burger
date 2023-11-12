import styles from './ingredient-details.module.css';
import InfoItem from './info-item/info-item';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { getCurrentItem } from '../../../utils/func';
function IngredientDetails(){
    const data = useSelector(getCurrentItem)
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
    const item = data ? data : selectedItem
    console.log(selectedItem)
    return(
        <div className={styles.container}>
                <img src={item.image_large} alt={item.name}></img>
                <p className="text text_type_main-medium pb-4 pt-4">{item.name}</p>
                <div className={`${styles.info} pt-4`}>
                    <InfoItem text='Калории,ккал' info={item.calories}></InfoItem>
                    <InfoItem text='Белки, г' info={item.proteins}></InfoItem>
                    <InfoItem text='Жиры, г' info={item.fat}></InfoItem>
                    <InfoItem text='Углеводы, г' info={item.carbohydrates}></InfoItem>
                </div>
        </div>
    )
}
IngredientDetails.propTypes = {
    data: PropTypes.shape({
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
}
export default IngredientDetails