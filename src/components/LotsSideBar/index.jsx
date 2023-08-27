import {AiFillCloseCircle, AiOutlineLink} from "react-icons/ai";
import styles from "./styles.module.scss"
import {BiUser} from "react-icons/bi";
import {BsBuildings} from "react-icons/bs";
import {Link} from "react-router-dom";

export const LotsSideBar = ({refSidebar, lot, toggleDisplayOff}) => {
	if (lot.length < 0) {
		return <p>Loading...</p>
	}
	return (

		 <div className={styles.container} ref={refSidebar}>
			 <div className={styles.close} onClick={toggleDisplayOff}><AiFillCloseCircle/></div>

			 <div className={styles.buyer}>
				 <div><BiUser/> Покупець:</div>
				 {lot.buyer !== null ?(<p>{lot.buyer}</p>):"-"}
			 </div>
			 <div className={styles.buyer}>
				 <div><BsBuildings/> Продавець:</div>
				 {lot.seller !== null ?(<p>{lot.seller}</p>):"-"}
			 </div>
			 <p>Статус: {lot.lotStatus!==null? lot.lotStatus:"-"}</p>
			 <p>ДК: {lot.dk!==null? lot.dk:"-"}</p>
			 {lot.lotTotalPrice !== null? (<div className={styles.price}>Ціна: <span>{lot.lotTotalPrice} грн</span></div>):(<div className={styles.price}>Ціна: -</div>)}


			 <div className={styles.lotUsers}>
				 <h3>Учасники Лоту:</h3>
				 {lot.participantNames && lot.participantNames.length > 0 ? (
					  lot.participantNames.map(item => (
							 <div key={item.id}>
								 <p><span><BiUser/> Імя:</span> {item.name}</p>
								 <p>Edrpou: {item.edrpou}</p>
							 </div>
					  ))
				 ) : (
					  <div>Невідомо Про Учасників Лоту</div>
				 )}
			 </div>

			 <div className={styles.links}>
				 <h3><AiOutlineLink/> Посилання:</h3>
				 <p> Посилання на Лот: {lot.lotUrl !==null ? <Link to={lot.lotURL}> {lot.lotURL}</Link>:"-"}</p>
				 <p>Посилання на PDF:  {lot.pdfURL !==null ? <Link to={lot.pdfURL}> {lot.pdfURL}</Link>:"-"}</p>
			 </div>
			 <div className={styles.burying}>
				 <h3>Продукція: </h3>
				 <div>
					 <div>Модель:</div>
					 <div>Ціна Однієї Штуки:</div>
					 <div>Кількість:</div>
					 <div>Ціна за все:</div>
				 </div>
				 {lot.lotItems && lot.lotItems.map(lotItem => (
						<div key={lotItem.id}>
							<p>{lotItem.model}</p>
							<p> {lotItem.price} грн</p>
							<p> {lotItem.amount}</p>
							<p>{lotItem.totalItemPrice} грн</p>
						</div>
				 ))}
			 </div>
		 </div>
	);
};
