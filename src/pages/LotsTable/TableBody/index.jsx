import styles from "../styles.module.scss";

export const TableBody = ({toggleDisplay, setLot, item, columns}) => {
	return (
		 <>
			 <li
					onClick={() => {
						toggleDisplay()
						setLot(item)
					}}
					key={item.id}
					className={styles.responsive_table__row}>
				 <div>{item.buyer}</div>
				 <div>{item.seller}</div>
				 <div>{item.lotStatus !== null ? item.lotStatus : "-"}</div>
				 <div className={styles.tooltip}>{item.participantNames.length > 0 && item.participantNames[0].name}
					 {item.participantNames.length > 0 ? <div className={styles.tooltiptext}>
						 {
								item.participantNames.length > 0 && item.participantNames.map(item => (
									 <p key={item.id}>{item.name}</p>
								))
						 }
					 </div> : "-"}
				 </div>
				 <div>{item.dk}</div>
				 <div>{item.lotTotalPrice !== null ? `${item.lotTotalPrice} грн` : "-"}</div>
			 </li>
		 </>
	);
};

