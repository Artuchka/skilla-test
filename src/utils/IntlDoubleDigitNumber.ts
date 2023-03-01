export const IntlDoubleDigitNumber = (num: number) => {
	return num.toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})
}
