import React from 'react';

function Option({ children, value }) {
    return (
        <option value={value}>
            { children }
        </option>
    );
}

export default Option;
