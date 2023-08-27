import styles from "../styles.module.scss";
import {useEffect, useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce";
import {LotStatusSelect} from "../../../components/LotStatusSelect";


export const TableFilters = ({columns, setSearch}) => {


	const options = [
		{ value: "CLARIFICATION_PERIOD", label: "Період уточнень" },
		{ value: "WAITING_FOR_ORDER", label: "Очікування пропозицій" },
		{ value: "PREQUALIFICATION", label: "Прекваліфікація" },
		{
			value: "PREQUALIFICATION_APPEAL_PERIOD",
			label: "Прекваліфікація (період оскаржень)"
		},
		{ value: "FIRST_INTERMEDIATE_STAGE", label: "Перший проміжний етап" },
		{ value: "SECOND_INTERMEDIATE_STAGE", label: "Другий проміжний етап" },
		{ value: "AUCTION_PERIOD", label: "Період аукціону" },
		{ value: "QUALIFICATION_PERIOD", label: "Кваліфікація переможця" },
		{
			value: "QUALIFICATION_PERIOD_APPEAL_PERIOD",
			label: "Кваліфікація переможців (період оскарження)"
		},
		{ value: "PROPOSAL_CONSIDERED", label: "Пзопозиції розглянуто" },
		{ value: "PURCHASE_DID_NOTE_TAKE_PLACE", label: "Закупівля не відбулась" },
		{ value: "COMPLETED_PURCHASE", label: "Завершена закупівля" },
		{ value: "AUCTION_IS_CANCELLED", label: "Торги відмінено" }
	]

	const [candidate, setCandidate] = useState({});
	const debouncedState = useDebounce(candidate, 500);

	useEffect(() => {
		setSearch(debouncedState);
	}, [debouncedState, setSearch]);

	const editCandidate = (e) => {
		const { name, value } = e.target;
		const result = {
			...candidate,
			[name]: value,
		};
		setCandidate(result);
	};

	return (
		 <li className={styles.responsive_table__filters}>
			 {
				 columns.map((input,index) => (
					  input.name === "lotTotalPrice" ?
							 <div key={input.name+index} className={styles.inputPrice}>
								 <input type="number" name="mix" placeholder="Від" min={0} onChange={editCandidate}/>
								 <input type="number" name="max" placeholder="До" onChange={editCandidate}/>
							 </div>
							 :
							 input.name === "lotStatus" ?
								  <LotStatusSelect
									   key={input.name + index}
									   isSearchable
									   isMulti
									   name={input.name}
									   placeHolder="Введіть Статус Лоту..."
									   options={options}
									   onChange={(selectedOptions) => {
										   editCandidate({ target: { name: 'lotStatus', value: selectedOptions.map(option => option.value).join(',') } });
									   }}

								  />
								  :
								  <div key={input.name+index}>
									  <input type="text" name={input.name} placeholder={input.placeholder} onChange={editCandidate}/>
								  </div>
				 ))
			 }

		 </li>
	);
};

