import React from 'react';

function CardEntities({title, number, subTitle, children, handleClick}) {
    return (
        <div className='box-home' onClick={handleClick}>
            {children}
            <span>{title}</span>
            <hr />
            <span className='number-users'>{number}</span> <span>{subTitle}</span>
        </div>
    );
}

export default CardEntities;
