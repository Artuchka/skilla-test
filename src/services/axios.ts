import axios from "axios"

export const serverURL = "https://api.skilla.ru/mango"

export const apiInstance = axios.create({
	baseURL: serverURL,
	withCredentials: true,
	headers: {
		Authorization: "Bearer testtoken",
	},
})
