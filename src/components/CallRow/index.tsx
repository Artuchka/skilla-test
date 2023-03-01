import React, { FC } from "react"
import { CallState } from "../../store/features/calls/slice"
import style from "./style.module.scss"
import { formatDuration, formatTime } from "../../utils/formatTime"
import incomingImg from "./../../assets/incomingCall.svg"
import outcomingImg from "./../../assets/outcominCall.svg"

export const CallRow: FC<CallState> = (props) => {
	const {
		id,
		partnership_id,
		partner_data,
		date,
		date_notime,
		time,
		from_number,
		from_extension,
		to_number,
		to_extension,
		is_skilla,
		status,
		record,
		line_number,
		in_out,
		from_site,
		source,
		errors,
		disconnect_reason,
		results,
		stages,
		abuse,
		contact_name,
		contact_company,
		person_id,
		person_name,
		person_surname,
		person_avatar,
	} = props
	const isIncomingCall = in_out === 0
	return (
		<div className={style.wrapper}>
			<div className={style.checked}>
				<input type="checkbox" />
			</div>
			<div className={style.type}>
				<img src={isIncomingCall ? incomingImg : outcomingImg} alt="" />
			</div>
			<div className={style.time}>{formatTime(date)}</div>
			<div className={style.person}>
				<img src={person_avatar} alt="" />
			</div>
			<div className={style.number}>
				{isIncomingCall ? to_number : from_number}
			</div>
			<div className={style.rating}>{source}</div>
			<div className={style.rating}>{source}</div>
			<div className={style.rating}>{source}</div>
			<div className={style.duration}>{formatDuration(time)}</div>
		</div>
	)
}
