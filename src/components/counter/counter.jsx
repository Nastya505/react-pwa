import React from 'react';

const Counter = (props) => {
    let [count, setCount] = React.useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h3>Counter App</h3>
        <div>
            <button onClick={increment}>+</button>
            <span> {count} </span>
            <button onClick={decrement}>-</button>
        </div>
    </div>
  )
}

export default Counter