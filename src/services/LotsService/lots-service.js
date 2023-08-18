import axios from "axios";

export const LotsService = {
	async getAllLots({currentPage, search, sorting}) {

		const resultSearchBuyer = search && search.buyer ? search.buyer : ""
		const resultSearchSeller = search && search.seller ? search.seller : ""
		const resultSearchDk = search && search.dk ? search.dk : ""
		const resultSearchLinkLot = search && search.lotURL ? search.lotURL : ""
		const resultParticipants = search && search.participants ? search.participants : ""
		const resultLotStatus = search && search.lotStatus ? search.lotStatus : ""
		const sort = sorting.name !== "" ? `&sort=${sorting.name},${sorting.order}` : ""

		const resultMin = search && search.min ? `${search.min}` : "0"
		const resultMax = search && search.max ? `${search.max}` : "0"
	
		const resultPrice = search && (resultMin !== "0" || resultMax !== "0") ? `${resultMin},${resultMax}` : ""
		return await axios.get(`https://neprozorro-10-release-production.up.railway.app/api/v1/lot-info/filter?size=10
		&page=${currentPage}
		${resultSearchBuyer !== "" ? "&buyer=" : ""}${resultSearchBuyer}
		${resultSearchSeller !== "" ? "&seller=" : ""}${resultSearchSeller}
		${resultSearchLinkLot !== "" ? "&lotURL=" : ""}${resultSearchLinkLot}
		${resultSearchDk !== "" ? "&dk=" : ""}${resultSearchDk}
		${resultParticipants !== "" ? "&participants=" : ""}${resultParticipants}
		${resultLotStatus !== "" ? "&lotStatus=" : ""}${resultLotStatus}
		${resultPrice !== "" ? "&lotTotalPrice=" : ""}${resultPrice}
		${sort}
		`,);
	}

}
