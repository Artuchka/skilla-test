import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { getAllCalls } from "./thunks"

export interface ErrorState {}
export interface ResultState {}
export interface StageState {}
export interface AnswerState {
	message: string
	from_support: number
	support_read_status: number
	person_read_status: number
}
export interface AbuseState {
	date: string
	person_name: string
	message: string
	support_read_status: number
	support_answer_status: number
	answers: AnswerState[]
}
export interface CallState {
	id: string
	partnership_id: string
	partner_data: {
		id: string
		name: string
		phone: string
	}
	date: string
	date_notime: string
	time: number
	from_number: string
	from_extension: string
	to_number: string
	to_extension: string
	is_skilla: number
	status: string
	record: string
	line_number: string
	in_out: number
	from_site: number
	source: string
	errors: ErrorState[]
	disconnect_reason: string
	results: ResultState[]
	stages: StageState[]
	abuse: AbuseState
	contact_name: string
	contact_company: string
	person_id: number
	person_name: string
	person_surname: string
	person_avatar: string
}
export interface CallsState {
	calls: CallState[]
	isLoading: boolean
}

const initialState: CallsState = {
	calls: [],
	isLoading: false,
}

export const CallsSlice = createSlice({
	name: "calls",
	initialState,
	reducers: {},

	extraReducers(builder) {
		builder.addCase(getAllCalls.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getAllCalls.fulfilled, (state) => {
			state.isLoading = false
		})
		builder.addCase(getAllCalls.rejected, (state) => {
			state.isLoading = false
		})
	},
})

export const {} = CallsSlice.actions

export default CallsSlice.reducer
