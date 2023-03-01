import React from "react"
import { menuLinks } from "../../utils/menuLinks"
import style from "./style.module.scss"

export const Menu = () => {
	return (
		<div className={style.wrapper}>
			{menuLinks.map((item) => {
				const { icon, text, id } = item
				return (
					<div key={id} className={style.menuItem}>
						<img src={icon} alt="" />
						<h3>{text}</h3>
					</div>
				)
			})}
		</div>
	)
}
