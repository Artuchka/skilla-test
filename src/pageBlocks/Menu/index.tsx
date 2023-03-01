import React from "react"
import { menuLinks } from "../../utils/menuLinks"
import style from "./style.module.scss"
import { Link, useLocation } from "react-router-dom"

export const Menu = () => {
	const { pathname } = useLocation()

	return (
		<div className={style.wrapper}>
			{menuLinks.map((item) => {
				const { icon, text, id, href } = item
				return (
					<Link
						to={href}
						key={id}
						className={`${style.menuItem} ${
							href === pathname ? style.active : ""
						}`}
					>
						<img src={icon} alt="" />
						<h3>{text}</h3>
					</Link>
				)
			})}
		</div>
	)
}
