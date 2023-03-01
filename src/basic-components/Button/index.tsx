import React, { ButtonHTMLAttributes, FC } from "react"
import style from "./style.module.scss"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	icon: any
}

export const Button: FC<Props> = ({ text, icon }) => {
	return (
		<div className={style.wrapper}>
			<span>{text}</span>
			<img src={icon} alt="" />
		</div>
	)
}
