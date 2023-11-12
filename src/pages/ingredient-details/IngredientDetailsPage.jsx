import styles from './IngredientDetailPage.module.css'
import IngredientDetails from '../../components/modal/ingredient-details/ingredient-details'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

export const IngredientDetailsPage = () => {
    const {id} = useParams()
    const allData = JSON.parse(localStorage.getItem('ingredients'))
    const selectedItem = useMemo(() => allData.find((item) => item._id === id))
    console.log(selectedItem)
    if(selectedItem){
    localStorage.setItem('selectedItem', JSON.stringify(selectedItem))
    }
    return(
        <div className={styles.container}>
        <IngredientDetails/>
        </div>
    )
}