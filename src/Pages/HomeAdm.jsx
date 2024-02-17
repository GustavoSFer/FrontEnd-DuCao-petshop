import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import CardEntities from '../Components/CardEntities';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShield, faUsers } from '@fortawesome/free-solid-svg-icons';
import { getAll } from '../Service';

function HomeAdm() {

    const [usuario, setUsuario] = useState([]);
    const [raca, setRaca] = useState([]);
    const [especie, setEspecie] = useState([]);

    const tipoCard = ( tipo ) => {
        console.log(tipo)
        console.log(usuario)
    }

    const getFindAllUsuarios = async () => {
        const users = await getAll("/usuarios");
        setUsuario(users);
    }
    const getFindAllRaca = async () => {
        const racas = await getAll("/racas");
        setRaca(racas);
    }
    const getFindAllEspecie = async () => {
        const especies = await getAll("/especies");
        setEspecie(especies);
    }

    //componentDidMount
    useEffect(() => {
        getFindAllUsuarios();
        getFindAllRaca();
        getFindAllEspecie();
    }, [])

    return(
        <div className='container'>
            <div>
                <Header />
            </div>

            <div className='d-flex justify-content-start flex-wrap'>

                <CardEntities
                    title="Usuário"
                    number={usuario.length}
                    subTitle="usuarios"
                    handleClick={() => tipoCard("user")}
                >
                    <FontAwesomeIcon icon={faUsers} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Raça"
                    number={raca.length}
                    subTitle="raças"
                    handleClick={() => tipoCard("raca")}
                >
                    <FontAwesomeIcon icon={faPaw} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Especie"
                    number={especie.length}
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
