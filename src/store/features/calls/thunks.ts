import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstance } from "../../../services/axios"

export const getAllCalls = createAsyncThunk(
	"calls/getAll",
	async (_, thunkAPI) => {
		try {
			const resp = await apiInstance(`/calls`, {
				method: "POST",
				data: {
					adsConfig: {
						long: 4,
						half: 2,
						short: 6,
						category: 5,
						longTall: 5,
					},
				},
			})

			return thunkAPI.fulfillWithValue(resp.data)
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)
