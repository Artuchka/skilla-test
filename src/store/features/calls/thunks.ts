import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstance } from "../../../services/axios"

export const getAllCalls = createAsyncThunk(
	"calls/getAll",
	async (_, thunkAPI) => {
		try {
			const resp = await apiInstance(`/getList`, {
				method: "POST",
				data: {},
			})

			return thunkAPI.fulfillWithValue(resp.data)
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)
