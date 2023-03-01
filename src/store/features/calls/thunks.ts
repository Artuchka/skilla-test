import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstance } from "../../../services/axios"
import { RootState } from "../../store"
import { TypeState } from "../filters/slice"

export const getAllCalls = createAsyncThunk(
	"calls/getAll",
	async (_, thunkAPI) => {
		try {
			const { type } = (thunkAPI.getState() as RootState).filters
			console.log({ type })

			const resp = await apiInstance(makeQueryGetAll({ type }), {
				method: "POST",
				data: {},
			})

			return thunkAPI.fulfillWithValue(resp.data)
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)

function makeQueryGetAll({ type }: { type: TypeState }) {
	let typeQuery = "&in_out="
	if (type !== "all") {
		typeQuery += `${type === "incoming" ? 1 : 0}`
	}
	const res = `/getList?${typeQuery}`

	return res
}
