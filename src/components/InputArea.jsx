import React, {useState} from 'react';

function InputArea({handleClick}) {
    const [value, setValue] = useState("");
    function handleChange(e) {
        const value = e.target.value;
        setValue(value);
    }
    
    return (
        <div className="form">
            <form onSubmit={(e) => {
                e.preventDefault();
                setValue("");
                handleClick(value);
            }} >
                <input type="text" onChange={handleChange} value={value}/>
                <button type="submit">
                <span>Add</span>
                </button>
            </form>
        
      </div>
    )
}

export default InputArea;
