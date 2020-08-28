import React, { useState } from 'react';

function List({text, handleDelete, id}) {
    return (
        <li onClick={() => {
            handleDelete(id)
        }}>{text}</li>
    )
}

export default List;
