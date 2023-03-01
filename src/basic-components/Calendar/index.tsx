import React, { SetStateAction, useEffect, useRef, useState } from "react"
import Cal, { OnChangeDateCallback } from "react-calendar"
import style from "./style.module.scss"
import "react-calendar/dist/Calendar.css"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import { updateFilter } from "../../store/features/filters/slice"
import { formatPayloadDate } from "../../utils/formatPayloadDate"
import arrowLeft from "./../../assets/leftArrow.svg"
import arrowRight from "./../../assets/rightArrow.svg"
import calendarImg from "./../../assets/calendar.svg"

const nowDate = new Date()
export const Calendar = () => {
	const wrapperRef = useRef(null)
	const [open, setOpen] = useState(true)
	const [value, onChange] = useState<[Date, Date]>([nowDate, nowDate])
	const dispatch = useDispatch<AppDispatch>()
	useEffect(() => {
		dispatch(
			updateFilter({
				name: "date",
				value: formatPayloadDate(value),
			})
		)
		setOpen(false)
	}, [value])

	const handleToggle = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div ref={wrapperRef} className={style.wrapper}>
			<div className={style.visible} onClick={handleToggle}>
				<img src={calendarImg} alt="" />
			</div>
			<div className={`${style.calendar} ${open ? style.open : ""}`}>
				<Cal
					selectRange={true}
					onChange={(v: any) => {
						onChange(v)
					}}
					value={value}
				/>
			</div>
		</div>
	)
}
