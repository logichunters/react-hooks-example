import React, { useState } from "react";

const StateDemo = () => {
    const [inputValue, setInputValue] = useState('Test');
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input value={inputValue} onChange={handleInput} />
        </div>
    );
}

export default StateDemo;