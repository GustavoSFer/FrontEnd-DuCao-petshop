import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';

function TdRaca({ item, remove, edit }) {
    return (
        <tr>
            <td>
                { item.nome }
            </td>
            <td className='cursor'>
            <FontAwesomeIcon icon={faUserPen} onClick={() => edit(item)} className='ms-2 me-5' />
            <FontAwesomeIcon icon={faTrashCan} onClick={() => remove(item)} />
            </td>
        </tr>
    );
}

export default TdRaca;
