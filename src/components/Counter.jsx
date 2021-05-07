import { useState } from "react"




const Counter = () => {
    const [value, setValue] = useState(10);

    const increase = () => setValue(value + 1);
    const decrease = () => setValue(value - 1);

    return (
        <div>
            Value: {value} 
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}


export default Counter;