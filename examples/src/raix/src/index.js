import React, { Component, PropTypes } from 'react'
import fetch from './fetch'
import { isFunction, isUndefined } from '../utils/type'

class RaixComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props.init || {}
		}
	}

	render() {
		const {
			Component,
			init,
			data,
			formatter,
			beforeRequest,
			afterRequest,
			...others
		} = this.props

		return <Component data={this.state.data} {...others} />
	}

	componentDidMount() {
		let data = this.props.data
		const formatter = this.props.formatter

		if (!Array.isArray(data)) {
			data = [data]
		}

		const startRequest = function () {
			fetch(...data).then(result => {
				const formattedData = isFunction(formatter) ? formatter(result) : result

				if (this.props.afterRequest(result)) {
					this.setState({
						data: formattedData
					})
				}
			})
		}.bind(this)

		this.props.beforeRequest(startRequest)
	}
}

RaixComponent.propTypes = {
	Component: PropTypes.func.isRequired,
	init: PropTypes.any,
	data: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	formatter: PropTypes.func,
	beforeRequest: PropTypes.func,
	afterRequest: PropTypes.func
}

Object.defineProperty(Raix, 'fetch', {
	get: () => fetch.library, 
	set: library => fetch.library = library
})

export default function Raix(beforeRequest, afterRequest) {
	return Component => {
		if (!isFunction(beforeRequest)) {
			beforeRequest = startRequest => startRequest()
		}
		if (!isFunction(afterRequest)) {
			afterRequest = result => true
		}

		return ({component, ...others}) => (
			<RaixComponent
				beforeRequest={beforeRequest}
				afterRequest={afterRequest}
				Component={Component}
				{...others}
			/>
		)
	}
}
