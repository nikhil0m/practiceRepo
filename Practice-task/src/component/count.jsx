import React,{useState} from "react";

function Count(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        if(count <= 0){
            setCount(0);
        }
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div style={{textAlign:"center"}}>
            <p>Count: {count}</p>
            <button onClick={increment} style={{marginRight:"4px"}}>Increment</button>
            <button onClick={decrement} style={{marginRight:"4px"}}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Count;