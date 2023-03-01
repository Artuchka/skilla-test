import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const typeOptions = ["all", "incoming", "outgoing"]

export type TypeState = "all" | "incoming" | "outgoing"
export interface FilterState {
	type: TypeState
}

const initialState: FilterState = {
	type: "all",
}

export const FilterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		updateFilter: (
			state,
			{
				payload,
			}: PayloadAction<{
				name: keyof FilterState
				value: any
			}>
		) => {
			const { name, value } = payload
			state[name] = value
		},
	},
})

export const { updateFilter } = FilterSlice.actions

export default FilterSlice.reducer
