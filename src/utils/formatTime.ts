import { IntlDoubleDigitNumber } from "./IntlDoubleDigitNumber"

export function formatTime(date: string): string {
	const time = new Date(date)

	const res = `${time.getHours()}:${IntlDoubleDigitNumber(time.getMinutes())}`
	return res
}
export function formatDuration(time: number): string {
	const seconds = time % 60
	const minutes = Math.floor(time / 60)

	const res = `${minutes}:${IntlDoubleDigitNumber(seconds)}`
	return res
}
