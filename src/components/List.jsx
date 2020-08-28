import React, { useState } from 'react';

function List({text}) {
    const [del, setDel] = useState(0);
    function handleClick() {
        setDel(prev=>{
            const prevNum = parseInt(prev) + 1;
            return prevNum % 2;
        })
    }
    return (
        <li onClick={handleClick} style={{textDecoration: (del ? "line-through" : "none")}}>{text}</li>
    )
}

export default List;
