const is = (type, value) => {
	return Object.prototype.toString.call(value) === `[object ${type}]`
}

export const isObject = value => is('Object', value)
export const isFunction = value => is('Function', value)
export const isUndefined = value => is('Undefined', value)
