import styles from './IngredientDetailPage.module.css'
import IngredientDetails from '../../components/modal/ingredient-details/ingredient-details'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

export const IngredientDetailsPage = () => {
   
    return(
        <div className={styles.container}>
        <IngredientDetails/>
        </div>
    )
}