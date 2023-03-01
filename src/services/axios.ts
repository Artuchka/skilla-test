import axios from "axios"

export const serverURL = "https://busy-red-zebra-robe.cyclic.app"

export const apiInstance = axios.create({
	baseURL: serverURL,
	withCredentials: true,
})
