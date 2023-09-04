import styles from './order-details.module.css';
import doneImgPath from '../../../images/icons/done.svg'

function OrderDetails(){
    return (
      <div className={styles.container}>
        <p className="text text_type_digits-large pb-4">034536</p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        <img src={doneImgPath} className="pt-15 pb-15"></img>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive pt-2">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    );
}
export default OrderDetails