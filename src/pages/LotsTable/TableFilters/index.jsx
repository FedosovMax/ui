import styles from "../styles.module.scss";
import {useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce";


export const TableFilters = ({columns, setSearch}) => {

	const [candidate, setCandidate] = useState({});

	const debouncedCandidate = useDebounce(candidate, 500);


	const editCandidate = (e) => {
		const {name, value} = e.target
		const result = {
			...candidate,
			[name]: value
		}
		setCandidate(result)
	}
	console.log(candidate)
	setSearch(debouncedCandidate)


	return (
		 <li className={styles.responsive_table__filters}>
			 {
				 columns.map((input) => (
						input.name === "lotTotalPrice" ?
							 <div className={styles.inputPrice}>
								 <input type="number" name="mix" placeholder="Від" min={0} onChange={editCandidate}/>
								 <input type="number" name="max" placeholder="До" onChange={editCandidate}/>
							 </div>
							 :
							 <div>
								 <input type="text" name={input.name} placeholder={input.placeholder} onChange={editCandidate}/>
							 </div>
				 ))
			 }
		 </li>
	);
};

