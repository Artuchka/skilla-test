import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./layouts/PageLayout"
import { Calls } from "./pages/Calls"
import { NotFound } from "./pages/NotFound"
import "./styles/index.scss"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PageLayout />}>
					<Route path="/calls" element={<Calls />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
