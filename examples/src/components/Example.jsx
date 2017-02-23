import React, { Component, PropTypes } from 'react'

export default class Example extends Component {
  render() {
    const data = this.props.data

    return (
      <div style={{textAlign: 'center'}}>
        <h1>{data.name}</h1>
        <h2>{data.greet}</h2>
      </div>
    )
  }
}

Example.propTypes = {
  data: PropTypes.object.isRequired
}
