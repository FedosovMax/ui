import styles from "./styles.module.scss"

export const TableMap = ({item, editCandidate, setSorting}) => {

	const handleSorting = (order) => {
		setSorting({name: item.name, order});
	};

	return (
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
	);
};

