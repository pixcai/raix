import Raix from '../raix/src'
import Example from './Example'

const beforeRequest = startRequest => setTimeout(startRequest, 1000)
const afterRequest = result => result.status === 200

export default Raix(beforeRequest, afterRequest)(Example)
