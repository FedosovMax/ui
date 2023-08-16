import styles from "./styles.module.scss";
import {useState} from "react";
import {useDebounce} from "../../hooks/useDebounce";


export const LotsFilters = ({setSearch}) => {
	const [candidate, setCandidate] = useState({});

	const debouncedCandidate = useDebounce(candidate, 300);

	const editCandidate = (e)=>{
		const {name,value}=e.target
		const result = {
			...candidate,
			[name]:value
		}
		setCandidate(result)
	}

	setSearch(debouncedCandidate)


	return (
		 <div className={styles.container}>
				<div className={styles.container__search}>
					<label>
						Покупець:
						<input type="text" name={"buyer"} placeholder="Ведіть покупця..." onChange={editCandidate}/>
					</label>
				</div>
			 <div className={styles.container__search}>
				 <label>
					 Продавець:
					 <input type="text" name={"seller"} placeholder="Ведіть продавця..." onChange={editCandidate}/>
				 </label>
			 </div>
			 <div className={styles.container__search}>
				 <label>
					 Dk:
					 <input type="text" name={"dk"}  placeholder="Ведіть дк..." onChange={editCandidate}/>
				 </label>
			 </div>
			 <div className={styles.container__search}>
				 <label>
					 Cилка на лот:
					 <input type="text" name={"lotURL"} placeholder="Ведіть силку на лот..." onChange={editCandidate}/>
				 </label>
			 </div>

			 <div className={styles.container__search}>
				 <label>
					 participants:
					 <input type="text" name={"participants"} onChange={editCandidate} placeholder={"Введіть імена через кому..."}/>
				 </label>
			 </div>


		 </div>
	);
};

