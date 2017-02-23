import axios from 'axios'
import { isObject } from '../utils/type'

fetch.library = axios

export default function fetch(...config) {
	return new Promise((resolve, reject) => {
		fetch.library(...config)
			.then(result => resolve(result), reason => reject(reason))
			.catch(error => reject(error))
	})
}
