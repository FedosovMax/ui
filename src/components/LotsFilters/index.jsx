import styles from "./styles.module.scss";
import {useState} from "react";
import {useDebounce} from "../../hooks/useDebounce";
import {TableMap} from "./TableMap";


export const LotsFilters = ({setSearch, setSorting, sorting}) => {
	const [candidate, setCandidate] = useState({});

	const debouncedCandidate = useDebounce(candidate, 300);

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

// totalPrice Lots max-min don`t forget

	const columns = [
		{name: "buyer", value: "Покупець", placeholder: "Введіть Покупця..."},
		{name: "seller", value: "Продавець", placeholder: "Введіть Продавця..."},
		{name: "lotStatus", value: "Статус Лота", placeholder: "Введіть Статус Лота..."},
		{name: "dk", value: "Dk", placeholder: "Введіть дк..."},
		{name: "lotURL", value: " Cилка на лот", placeholder: "Введіть силку на лот..."},
		{name: "lotTotalPrice"},
	]


	return (
		 <div className={styles.container}>
			 {
				 columns.map((item) => (
						<TableMap
							 key={item.id}
							 item={item}
							 editCandidate={editCandidate}
							 sorting={sorting}
							 setSorting={setSorting}/>
				 ))
			 }
		 </div>
	);
};



