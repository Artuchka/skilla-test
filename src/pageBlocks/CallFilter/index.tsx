import React, { FC } from "react"
import style from "./style.module.scss"
import { SelectList } from "../../basic-components/SelectList"
import { useSelector } from "react-redux"
import { selectFilters } from "../../store/features/filters/selector"
import { typeOptions } from "../../store/features/filters/slice"

export const CallFilter: FC = () => {
	const { type } = useSelector(selectFilters)

	return (
		<div className={style.wrapper}>
			<SelectList selected={type} options={typeOptions} />
		</div>
	)
}
