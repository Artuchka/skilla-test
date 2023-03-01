import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import style from "./style.module.scss"
import { Sidebar } from "../../pageBlocks/Sidebar"

function PageLayout() {
	return (
		<div className={style.wrapper}>
			<aside>
				<Sidebar />
			</aside>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default PageLayout
