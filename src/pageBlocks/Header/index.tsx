import React from "react"
import style from "./style.module.scss"
import { ProgressBar } from "../../basic-components/ProgressBar"
import arrowDownImg from "./../../assets/images/downArrow.svg"
import userAvatarImg from "./../../assets/images/userAvatar.png"

export const Header = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.date}>Среда, 13 окт</div>
			<div className={style["progress-bars-container"]}>
				<ProgressBar
					text={`Новый звонки 20 из 30 штук`}
					color="var(--progress-green)"
				/>
				<ProgressBar
					text={`Качество разговоров`}
					color="var(--progress-yellow)"
				/>
				<ProgressBar
					text={`Конверсия в заказ 67%`}
					color="var(--progress-red)"
				/>
			</div>

			<div className={style.company}>
				<span>ИП Сидорова Александра Михайловна</span>
				<img src={arrowDownImg} alt="" />
			</div>
			<div className={style.user}>
				<img src={userAvatarImg} alt="" />
				<img src={arrowDownImg} alt="" />
			</div>
		</div>
	)
}
