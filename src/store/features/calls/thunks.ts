import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstance } from "../../../services/axios"
import { RootState } from "../../store"
import { TypeState } from "../filters/slice"

export const getAllCalls = createAsyncThunk(
	"calls/getAll",
	async (_, thunkAPI) => {
		try {
			const { type, date } = (thunkAPI.getState() as RootState).filters
			console.log({ type, date })

			const resp = await apiInstance(makeQueryGetAll({ type, date }), {
				method: "POST",
				data: {},
			})

			return thunkAPI.fulfillWithValue(resp.data)
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)

function makeQueryGetAll({
	type,
	date,
}: {
	type: TypeState
	date: [string, string]
}) {
	let typeQuery = ""
	if (type !== "all") {
		typeQuery = `&in_out=${type === "incoming" ? 1 : 0}`
	}
	const dateQuery = `&date_start=${date[0]}&date_end=${date[1]}`

	const res = `/getList?${dateQuery}${typeQuery}`

	return res
}
