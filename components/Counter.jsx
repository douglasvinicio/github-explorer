import { useState } from "react";

// hook -> gancho

export function Counter(){

    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);        
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment +1</button>
            <br />
            <button type="button" onClick={decrement}>Decrement -1</button>
        </div>
    );
}