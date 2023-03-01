import React from "react"
import style from "./style.module.scss"
import { Menu } from "../Menu"
import { Logo } from "../Logo"
import { Button } from "../../basic-components/Button"
import plusImg from "./../../assets/images/add.svg"
import warnImg from "./../../assets/images/warn.svg"

export const Sidebar = () => {
	return (
		<div className={style.wrapper}>
			<Logo />
			<Menu />
			<div className={style.actions}>
				<Button text="Добавить заказ" icon={plusImg} />
				<Button text="Оплата" icon={warnImg} />
			</div>
		</div>
	)
}
