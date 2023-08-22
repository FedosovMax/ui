import React, {useState} from "react";
import styles from "../styles.module.scss";

export const TableHeader = ({columns, setSorting}) => {
	const [activeSpans, setActiveSpans] = useState({});

	const handleSorting = (item, order) => {
		setSorting({name: item.name, order});
	};

	const toggleActiveSpan = (index, direction) => {
		setActiveSpans((prevActiveSpans) => ({
			...prevActiveSpans,
			[index]: direction,
		}));
	};

	return (
		 <li className={styles.responsive_table__header}>
			 {columns.map((item, index) => (
					<div key={item.name + index}>
						<div className={styles.sorting}>
            <span
	             onClick={() => {
		             handleSorting(item, "desc");
		             toggleActiveSpan(index, "desc");
	             }}
	             className={
		             activeSpans[index] === "desc" ? styles.active : ""
	             }
	             style={{
		             color: activeSpans[index] === "desc" ? "white" : "",
	             }}
            >
              ▲
            </span>
							<span
								 onClick={() => {
									 handleSorting(item, "asc");
									 toggleActiveSpan(index, "asc");
								 }}
								 className={
									 activeSpans[index] === "asc" ? styles.active : ""
								 }
								 style={{
									 color: activeSpans[index] === "asc" ? "white" : "",
								 }}
							>
              ▼
            </span>
						</div>
						<h3>{item.value}</h3>
					</div>
			 ))}
		 </li>
	);
};
