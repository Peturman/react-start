import React from 'react'
import { Link } from 'react-router'

export const Counter = (props) => {
  return (
    <div style={{margin: '0 auto'}}>
      <h2>Counter: {props.counter.count}</h2>
      <button className='btn btn-default' onClick={props.increment}>
        Increment
      </button>
      {' '}
      <button className='btn btn-default' onClick={props.doubleAsync}>
        Double (Async)
      </button>

      <div>
        <Link to='/counter/count' >go next</Link>
      </div>
    </div>
  )
}

export default Counter
