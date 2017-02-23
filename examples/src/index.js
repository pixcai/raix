import ReactDOM from 'react-dom'
import Example from './components'

const init = {
  name: 'my name',
  greet: 'my words'
}
const data = {
  url: '/api/test'
}
const formatter = data => data.data

ReactDOM.render(
  <Example init={init} data={data} formatter={formatter} />,
  document.getElementById('raix')
)
