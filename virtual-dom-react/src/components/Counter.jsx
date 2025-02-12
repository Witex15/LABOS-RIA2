import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
        <div className="counter">
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Add count</button>
        </div>
    );
}

export default Counter;
