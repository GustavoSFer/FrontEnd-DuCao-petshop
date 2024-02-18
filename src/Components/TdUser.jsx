import React from 'react';
import Button from './Button';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function TdUser({ item, remove }) {
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
            <td>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => remove(item)} />
            </td>
        </tr>
    );
}

export default TdUser;
