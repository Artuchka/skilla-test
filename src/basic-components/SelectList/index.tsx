import React, { FC, useEffect, useRef, useState } from "react"
import style from "./style.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectFilters } from "../../store/features/filters/selector"
import {
	FilterState,
	typeOptions,
	updateFilter,
} from "../../store/features/filters/slice"
import arrowDownImg from "./../../assets/downArrow.svg"
import { AppDispatch } from "../../store/store"

type Props = {
	selected: string
	name: keyof FilterState
	options: string[]
}
export const SelectList: FC<Props> = ({ selected, options, name }) => {
	const listRef = useRef(null)
	const visibleRef = useRef(null)
	const [open, setOpen] = useState(true)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		const func = (e: MouseEvent) => {
			const parent = (e.target as any).parentNode
			const isInside = parent === listRef.current
			const isOpening = parent === visibleRef.current

			if (isOpening) return
			if (!isInside) {
				setOpen(false)
			}
		}

		window.addEventListener("click", func)

		return () => {
			window.removeEventListener("click", func)
		}
	}, [])
	const handleOpen = () => {
		console.log("opening")

		setOpen(true)
	}
	const handleClose = () => {
		console.log("closing")

		setOpen(false)
	}

	return (
		<div className={style.wrapper}>
			<div
				className={style.visible}
				onClick={handleOpen}
				ref={visibleRef}
			>
				<span className={style.active}>{selected}</span>
				<img src={arrowDownImg} alt="" />
			</div>

			<div
				ref={listRef}
				className={`${style.list} ${open ? style.open : ""}`}
			>
				{options.map((item) => {
					return (
						<span
							onClick={() => {
								handleClose()
								dispatch(updateFilter({ name, value: item }))
							}}
							key={item}
							className={`${style.option} ${
								item === selected ? style.active : ""
							}`}
						>
							{item}
						</span>
					)
				})}
			</div>
		</div>
	)
}
