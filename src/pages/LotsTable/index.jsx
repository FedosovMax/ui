import {LotsSideBar} from "../../components/LotsSideBar";
import styles from "./styles.module.scss"
import {useEffect, useRef, useState} from "react";
import {LotsFilters} from "../../components/LotsFilters";
import {LotsService} from "../../services/LotsService/lots-service";
import {LotsPagination} from "../../components/LotsPagination";

const PAGE_SIZE = 10;
const DEFAULT_BUTTON_COUNT = 3;
const DEFAULT_SIBLING_COUNT = 1;

export const LotsTable = () => {

	const refSidebar = useRef(null);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [lot, setLot] = useState([]);
	const [lots, setLots] = useState([]);

	const fetchLots = async (currentPage) => {
		try {
			const response = await LotsService.getAllLots(currentPage);
			const {content, totalPages} = response.data;
			setLots(content);
			setTotalPages(totalPages);
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		fetchLots(currentPage);
	}, [currentPage]);



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
					 <LotsFilters/>
					 <ul className={styles.responsive_table}>
						 <li className={styles.responsive_table__header}>
							 <div className="col ">Покупець</div>
							 <div className="col ">Продавець</div>
							 <div className="col ">Статус Лота</div>
							 <div className="col ">Імена учасників</div>
							 <div className="col ">Дк</div>
							 <div className="col">Ціна</div>
						 </li>
						 {
							 (lots.map((item) => (
									<li
										 onClick={() => {
											 toggleDisplay()
											 setLot(item)
										 }}
										 key={item.id}
										 className={styles.responsive_table__row}>
										<div className="col " data-label="Покупець">{item.buyer}</div>
										<div className="col " data-label="Продавець">{item.seller}</div>
										<div className="col " data-label="Статус Лота">{item.lotStatus}</div>

										<div className={styles.tooltip}
										     data-label="Імена учасників">{item.participantNames.length > 0 && item.participantNames[0].name}
											{item.participantNames.length > 0 ? <div className={styles.tooltiptext}>
												{
													 item.participantNames.length > 0 && item.participantNames.map(item => (
															<p key={item.id}>{item.name}</p>
													 ))
												}
											</div> : "Немає Інформації"}
										</div>

										<div className="col " data-label="Дк">{item.dk}</div>
										<div className="col " data-label="Ціна">{item.lotTotalPrice} грн</div>
									</li>
							 )))
						 }
					 </ul>
				 </div>
				 <LotsSideBar refSidebar={refSidebar} lot={lot} toggleDisplayOff={toggleDisplayOff}/>
			 </div>
			 <LotsPagination
					buttonConst={DEFAULT_BUTTON_COUNT}
					contentPerPage={PAGE_SIZE}
					siblingCount={DEFAULT_SIBLING_COUNT}
					currentPage={currentPage}
					onSetCurrentPage={setCurrentPage}
					totalPageCount={totalPages}
			 />
		 </>
	);
};

