import React from 'react';
import Header from '../Components/Header';
import CardEntities from '../Components/CardEntities';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShield, faUsers } from '@fortawesome/free-solid-svg-icons';

function HomeAdm() {

    const tipoCard = ( tipo ) => {
        console.log(tipo)
    }

    return(
        <div className='container'>
            <div>
                <Header />
            </div>

            <div className='d-flex justify-content-start flex-wrap'>

                <CardEntities
                    title="Usuário"
                    number="136"
                    subTitle="usuarios"
                    handleClick={() => tipoCard("user")}
                >
                    <FontAwesomeIcon icon={faUsers} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Raça"
                    number="6"
                    subTitle="raças"
                    handleClick={() => tipoCard("raca")}
                >
                    <FontAwesomeIcon icon={faPaw} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Especie"
                    number="16"
                    subTitle="especies"
                    handleClick={() => tipoCard("especie")}
                >
                    <FontAwesomeIcon icon={faShield} className='me-3' />
                </CardEntities>             
              
            </div>
        </div>
    );
}

export default HomeAdm;
