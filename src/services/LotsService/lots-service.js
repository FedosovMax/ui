import axios from "axios";

export const LotsService = {
	async getAllLots({currentPage,search}) {
		console.log(currentPage)
		// return await axios.get(`http://localhost:8081/lot-info/filter?page=${currentPage}&size=10&sort=buyer,asc`);

		const resultSearchBuyer = search && search.buyer ? search.buyer: ""
		const resultSearchSeller = search && search.seller ? search.seller: ""
		const resultSearchDk = search && search.dk ? search.dk: ""
		const resultSerchLinkLot = search && search.buyer ? search.buyer: ""
		const resultParticipants = search && search.participants ? search.participants: ""
		// debugger

		return await axios.get(`http://localhost:8081/lot-info/filter?size=10
		&page=${currentPage}
		${resultSearchBuyer !==  ""? "&buyer=":""}${resultSearchBuyer}
		${resultSearchSeller !== ""?"&seller=":""}${resultSearchSeller}
		${resultSerchLinkLot !== "" ? "&lotURL=" :""}${resultSerchLinkLot}
		${resultSearchDk !== "" ? "&dk=":""}${resultSearchDk}
		${resultParticipants !== "" ? "&participants":""}${resultParticipants}
		`);
	}

}


