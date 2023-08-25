import {LotsSideBar} from "../../components/LotsSideBar";
import styles from "./styles.module.scss"
import {useEffect, useRef, useState} from "react";
import {LotsService} from "../../services/LotsService/lots-service";
import {LotsPagination} from "../../components/LotsPagination";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {TableFilters} from "./TableFilters";

const PAGE_SIZE = 10;
const DEFAULT_BUTTON_COUNT = 3;
const DEFAULT_SIBLING_COUNT = 1;

export const LotsTable = () => {

	const refSidebar = useRef(null);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [lot, setLot] = useState([]);
	const [lots, setLots] = useState([]);
	const [sorting, setSorting] = useState({name: "", order: ""});
	const [search, setSearch] = useState({});

	const columns = [
		{name: "buyer", value: "Покупець", placeholder: "Введіть Покупця..."},
		{name: "seller", value: "Продавець", placeholder: "Введіть Продавця..."},
		{name: "lotStatus", value: "Статус Лота", placeholder: "Введіть Статус Лота..."},
		{name: "participants", value: " Імена учасників", placeholder: "Імена учасників через комую..."},
		{name: "dk", value: "Dk", placeholder: "Введіть дк..."},
		{name: "lotTotalPrice", value: "Ціна"}
	]

	const fetchLots = async (currentPage) => {
		try {
			const response = await LotsService.getAllLots({currentPage, search, sorting});
			const {content, totalPages} = response.data;
			setLots(content);
			setTotalPages(totalPages);
		} catch (error) {
			console.log(error);
		}
	};




	useEffect(() => {
		fetchLots(currentPage);
	}, [currentPage, search, sorting]);


	const toggleDisplay = () => {
		if (refSidebar.current) {
			refSidebar.current.style.display = 'block';
		}
	};

	const toggleDisplayOff = () => {
		if (refSidebar.current) {
			refSidebar.current.style.display = 'none';
		}
	};

	return (
		 <>
			 <div className={styles.wrapper}>

				 <div className={styles.container}>
					 <ul className={styles.responsive_table}>
						 <TableHeader columns={columns} setSorting={setSorting}/>
						 <TableFilters columns={columns} setSearch={setSearch}/>
						 {
							 lots.length > 0 ? (lots.map((item) => (
									<TableBody key={item.id} item={item} setLot={setLot} toggleDisplay={toggleDisplay} colums={columns}/>
							 ))) : <div className={styles.notFound}>Lots Not Found</div>
						 }
					 </ul>
				 </div>
				 <LotsSideBar refSidebar={refSidebar} lot={lot} toggleDisplayOff={toggleDisplayOff}/>
			 </div>
			 {lots.length > 0 ? <LotsPagination
					buttonConst={DEFAULT_BUTTON_COUNT}
					contentPerPage={PAGE_SIZE}
					siblingCount={DEFAULT_SIBLING_COUNT}
					currentPage={currentPage}
					onSetCurrentPage={setCurrentPage}
					totalPageCount={totalPages}
			 /> : null}
		 </>
	);
};

