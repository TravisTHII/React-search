export function validText(x: string) {
	const v = x.trim()
	return v === null || (/^ *$/).test(v) || v.length > 9999
}

export function invalidValue(s: string) {
	return s === null || (/^ *$/).test(s)
}