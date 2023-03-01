import React, { FC } from "react"
import style from "./style.module.scss"

type Props = {
	text: string
	color: string
}

export const ProgressBar: FC<Props> = ({ text, color }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.text}>{text}</div>
			<div className={style.bar} style={{ backgroundColor: color }}></div>
		</div>
	)
}
