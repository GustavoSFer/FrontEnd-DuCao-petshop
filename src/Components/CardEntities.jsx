import React from 'react';

function CardEntities({title, children, handleClick}) {
    return (
        <div className='box-home' onClick={handleClick}>
            {children}
            <span>{title}</span>
            <hr />
        </div>
    );
}

export default CardEntities;
