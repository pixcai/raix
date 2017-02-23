# raix
Async request extensions for React

# Install
`npm install --save raix`

# How to use
```js
import Raix from 'raix'
import Example from './components/Example'

export default Raix()(Example)
```

# API
### beforeRequest, afterRequest
example:
```js
import Raix from 'raix'
import Example from './components/Example'

const beforeRequest = startRequest => setTimeout(startRequest, 1000)
const afterRequest = result => result.status === 200

export default Raix(beforeRequest, afterRequest)(Example)
```
### init, data, formatter
example:
```js
const init = {name: 'example'}
const data = {url: 'http://localhost:8000/api/test'}
const formatter = result => result.data

<RaixExample init={init} data={data} formatter={formatter} />
```

# License
MIT
