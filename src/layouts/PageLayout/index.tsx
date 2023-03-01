import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import style from "./style.module.scss"
import { Sidebar } from "../../pageBlocks/Sidebar"
import { Header } from "../../pageBlocks/Header"

function PageLayout() {
	return (
		<div className={style.wrapper}>
			<header>
				<Header />
			</header>
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
