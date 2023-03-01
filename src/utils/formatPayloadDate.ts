import { IntlDoubleDigitNumber } from "./IntlDoubleDigitNumber"

export function formatPayloadDate(value: Date[]): string[] {
	const fromDate = `${value[0].getFullYear()}-${IntlDoubleDigitNumber(
		value[0].getMonth()
	)}-${IntlDoubleDigitNumber(value[0].getDate())}`
	const toDate = `${value[1].getFullYear()}-${IntlDoubleDigitNumber(
		value[1].getMonth()
	)}-${IntlDoubleDigitNumber(value[1].getDate())}`

	return [fromDate, toDate]
}
