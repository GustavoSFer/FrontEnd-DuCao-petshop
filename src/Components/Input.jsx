import React from 'react';

function Input({ type, labelTxt, handleChange, value, placeholder }) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">{labelTxt}</span>
            <
                input
                type={type}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
