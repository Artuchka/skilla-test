import React, { useEffect } from "react"
import style from "./style.module.scss"
import { CallList } from "../../components/CallList"
import { CallFilter } from "../../pageBlocks/CallFilter"

export const Calls = () => {
	return (
		<div className={style.wrapper}>
			<CallFilter />
			<CallList />
		</div>
	)
}
