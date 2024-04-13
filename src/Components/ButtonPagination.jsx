import React from 'react';

function ButtonPagination({ children, handleClick, style, value, paginaAtual }) {
    return(
        <button
        className={`btn btn-primary ${style}`}
        onClick={handleClick}
        value={value}
        style={value == paginaAtual ? {backgroundColor: "#6495ED"} : null}
        >
            {children}
        </button>
    );
}

export default ButtonPagination;
