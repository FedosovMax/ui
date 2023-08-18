import styles from "./styles.module.scss"

export const TableMap = ({item, editCandidate, setSorting}) => {

	const handleSorting = (order) => {
		setSorting({name: item.name, order});
	};

	return (
		 item.name === "lotTotalPrice" ? (
				<div className={styles.container__search}>
					<div className={styles.sorting}>
						<span onClick={() => handleSorting("desc")}>▲</span>
						<span onClick={() => handleSorting("asc")}>▼</span>
					</div>
					<label className={styles.price}>
						Ціна :
						<input type="number" name="min" placeholder="Введіть Мінімальне Число" min="0" onChange={editCandidate}/>
						<input type="number" name="max" placeholder="Введіть Максемальне Число" onChange={editCandidate}/>
					</label>
				</div>
		 ) : (
				<div className={styles.container__search}>
					<div className={styles.sorting}>
						<span onClick={() => handleSorting("desc")}>▲</span>
						<span onClick={() => handleSorting("asc")}>▼</span>
					</div>
					<label>
						{item.value} :
						<input type="text" name={item.name} placeholder={item.placeholder} onChange={editCandidate}/>
					</label>
				</div>
		 )
	);
};

