import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';

function TdUser({ item, remove, edit }) {
    
    return(
        <tr>
            <td>
                { item.nome }
            </td>
            <td>
                { item.cpf }
            </td>
            <td>
                { item.email }
            </td>
            <td>
                { item.telefone }
            </td>
            <td className='cursor'>
            <FontAwesomeIcon icon={faUserPen} onClick={() => edit(item)} className='ms-2 me-5' />
            <FontAwesomeIcon icon={faTrashCan} onClick={() => remove(item)} />
            </td>
        </tr>
    );
}

export default TdUser;
