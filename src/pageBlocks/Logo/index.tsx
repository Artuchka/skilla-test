import React from "react"
import { menuLinks } from "../../utils/menuLinks"
import style from "./style.module.scss"
import logoImg from "./../../assets/logo.svg"

export const Logo = () => {
	return (
		<div className={style.wrapper}>
			<img src={logoImg} alt="" />
		</div>
	)
}
