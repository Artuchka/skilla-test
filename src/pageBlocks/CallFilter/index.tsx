import React, { FC } from "react"
import style from "./style.module.scss"
import { SelectList } from "../../basic-components/SelectList"

export const CallFilter: FC = () => {
	return (
		<div className={style.wrapper}>
			<SelectList />
		</div>
	)
}
