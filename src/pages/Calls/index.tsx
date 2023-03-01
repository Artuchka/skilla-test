import React, { useEffect } from "react"
import style from "./style.module.scss"
import { CallList } from "../../components/CallList"

export const Calls = () => {
	return (
		<div className={style.wrapper}>
			<CallList />
		</div>
	)
}
