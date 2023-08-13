import axios from "axios";

export const LotsService = {
	async getAllLots(currentPage) {
		console.log(currentPage)
		return await axios.get(`http://localhost:8081/lot-info/filter?page=${currentPage}&size=10&sort=buyer,asc`);
	}

}


