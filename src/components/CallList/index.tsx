import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../store/store"
import { selectCalls } from "../../store/features/calls/selector"
import { getAllCalls } from "../../store/features/calls/thunks"
import { CallRow } from "../CallRow"
import style from "./style.module.scss"
import { selectFilters } from "../../store/features/filters/selector"

export const CallList = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { calls, isLoading } = useSelector(selectCalls)
	const { type, date } = useSelector(selectFilters)
	useEffect(() => {
		dispatch(getAllCalls())
	}, [type, date])

	if (isLoading) {
		// return <LoadingSkeleton />
		return <h1>loading</h1>
	}
	return (
		<div className={style.wrapper}>
			<div className={style.heading}>
				<span>
					<input type="checkbox" disabled />
				</span>
				<span>Тип</span>
				<span>Время</span>
				<span>Сотрудник</span>
				<span>Звонок</span>
				<span>Источник</span>
				<span>Оценка</span>
				<span>Длительность</span>
			</div>
			<div className={style.list}>
				{calls.map((item) => {
					return <CallRow key={item.id} {...item} />
				})}
			</div>
		</div>
	)
}
