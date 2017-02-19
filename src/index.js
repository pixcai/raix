import React from 'react'
import request from './request'
import { isFunction, isUndefined } from '../utils/type'

export default (beforeRequest, afterRequest) => Component => class RaixComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			data: isFunction(beforeRequest) ? beforeRequest() : isUndefined(beforeRequest) ? {} : beforeRequest
		}
	}

	render() {
		const { src, data, ...others } = this.props

		return React.createElement(Component, {
			data: this.state.data, 
			{...others}
		})
	}

	componentDidMount() {
		let data = this.state.data

		request(this.props.src).then(result => {
			data = isFunction(this.props.data) ? this.props.data(data) : data
			this.setState({
				data: data
			})
			return data
		}).then(data => {
			if (isFunction(afterRequest)) {
				afterRequest(data)
			}
		})
	}
}
