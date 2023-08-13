import {AiFillCloseCircle} from "react-icons/ai";
import styles from "./styles.module.scss"

export const LotsSideBar = ({refSidebar, lot, toggleDisplayOff}) => {
	if (lot.length < 0) {
		return <p>Loading...</p>
	}
	return (


		 <div className={styles.container} ref={refSidebar}>
			 <div className={styles.close} onClick={toggleDisplayOff}><AiFillCloseCircle/></div>

			 <p>Покупець: {lot.buyer}</p>
			 <p>Продавець: {lot.seller}</p>

			 <p>Статус: {lot.lotStatus}</p>
			 <p>ДК: {lot.dk}</p>
			 <p>Ціна: {lot.lotTotalPrice}</p>
			 <div>
				 {lot.participantNames && lot.participantNames.map(item => (
						<p>Імя: {item.name} - edrpou {item.edrpou}</p>
				 ))}
			 </div>
			 <p> Силка на лот : {lot.lotURL}</p>
			 <p>Силка на pdf : {lot.pdfURL}</p>
			 <div>
				 {lot.lotItems && lot.lotItems.map(lotItem => (
						<div>
							<p>Модель: {lotItem.model}</p>
							<p>Ціна однієї штуки: {lotItem.price} грн</p>
							<p>Кількість: {lotItem.amount}</p>
							<p>Ціна за все: {lotItem.totalItemPrice} грн</p>
						</div>
				 ))}
			 </div>
		 </div>
	);
};

