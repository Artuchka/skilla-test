import React, { SetStateAction, useEffect, useState } from "react"
import Cal, { OnChangeDateCallback } from "react-calendar"
import style from "./style.module.scss"
import "react-calendar/dist/Calendar.css"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import { updateFilter } from "../../store/features/filters/slice"
import { formatPayloadDate } from "../../utils/formatPayloadDate"

const nowDate = new Date()
export const Calendar = () => {
	const [value, onChange] = useState<[Date, Date]>([nowDate, nowDate])
	const dispatch = useDispatch<AppDispatch>()
	useEffect(() => {
		dispatch(
			updateFilter({
				name: "date",
				value: formatPayloadDate(value),
			})
		)
	}, [value])

	return (
		<div className={style.wrapper}>
			<Cal
				selectRange={true}
				onChange={(v: any) => {
					onChange(v)
				}}
				value={value}
			/>
		</div>
	)
}
