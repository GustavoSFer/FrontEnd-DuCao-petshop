import React, { useState } from 'react';
import Header from '../Components/Header';
import CardEntities from '../Components/CardEntities';
import HtmlUser from '../Components/HtmlUser';
import HtmlRaca from '../Components/HtmlRaca';
import HtmlEspecie from '../Components/HtmlEspecie';
import HtmlAbrirAgenda from '../Components/HtmlAbrirAgenda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShield, faUsers } from '@fortawesome/free-solid-svg-icons';

function HomeAdm() {

    const [tipo, setTipo] = useState("");

    const TipoCard = ( escolhido ) => {
        setTipo(escolhido)
    }

    return(
        <div className='container'>
            <div>
                <Header />
            </div>

            <div className='d-flex justify-content-start flex-wrap'>

                <CardEntities
                    title="Usuário"
                    handleClick={() => TipoCard("user")}
                >
                    <FontAwesomeIcon icon={faUsers} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Raça"
                    handleClick={() => TipoCard("raca")}
                >
                    <FontAwesomeIcon icon={faPaw} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Especie"
                    handleClick={() => TipoCard("especie")}
                >
                    <FontAwesomeIcon icon={faShield} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Abrir Agenda"
                    handleClick={() => TipoCard("agenda")}
                >
                    <FontAwesomeIcon icon={faShield} className='me-3' />
                </CardEntities>
              
            </div>

            <main>
                {
                    tipo === "user" ?
                        <HtmlUser />
                    :
                    tipo === "raca" ?
                        <HtmlRaca />
                    :
                    tipo === "especie" ?
                        <HtmlEspecie />
                    :
                    tipo === "agenda" &&
                        <HtmlAbrirAgenda />
                    
                }
            </main>
        </div>
    );
}

export default HomeAdm;
