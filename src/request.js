import axios from 'axios'
import { isObject } from '../utils/type'

export default urlOrConfig => {
	let axiosConfig = {
		method: 'get', 
		url: urlOrConfig
	}

	if (isObject(urlOrConfig)) {
		axiosConfig = urlOrConfig
	}

	return new Promise((resolve, reject) => {
		axios(axiosConfig).then(result => {
			if (result.status === 200) {
				resolve(result.data)
			} else {
				reject(result)
			}
		}).catch(error => reject(error))
	})
}
