import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';

function TdAnimal({ item, remove, edit }) {
    console.log(item)
    return (
        <tr>
            <td className='cursor'>
                <FontAwesomeIcon icon={faUserPen} onClick={() => edit(item)} />
            </td>
            <td>
                { item.nome }
            </td>
            <td>
                { item.raca.nome }
            </td>
            <td>
                { item.especie.nome }
            </td>
            <td>
                { item.peso } Kg
            </td>
            <td className='cursor'>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => remove(item)} />
            </td>
        </tr>
    );
}

export default TdAnimal;
