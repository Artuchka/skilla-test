import React from "react"
import style from "./style.module.scss"

export const NotFound = () => {
	return (
		<div className={style.wrapper}>
			<h1>Эта страница в разработке</h1>
			<h4>Пожалуйста перейдите на вкладку "Звонки"</h4>
		</div>
	)
}
