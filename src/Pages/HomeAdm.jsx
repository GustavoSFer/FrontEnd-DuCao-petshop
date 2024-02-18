import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import CardEntities from '../Components/CardEntities';
import HtmlUser from '../Components/HtmlUser';
import HtmlRaca from '../Components/HtmlRaca';
import HtmlEspecie from '../Components/HtmlEspecie';
import { getAll } from '../Service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShield, faUsers } from '@fortawesome/free-solid-svg-icons';

function HomeAdm() {

    const [usuario, setUsuario] = useState([]);
    const [raca, setRaca] = useState([]);
    const [especie, setEspecie] = useState([]);
    const [tipo, setTipo] = useState("");

    const TipoCard = ( escolhido ) => {
        setTipo(escolhido)
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
                    handleClick={() => TipoCard("user")}
                >
                    <FontAwesomeIcon icon={faUsers} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Raça"
                    number={raca.length}
                    subTitle="raças"
                    handleClick={() => TipoCard("raca")}
                >
                    <FontAwesomeIcon icon={faPaw} className='me-3' />
                </CardEntities>

                <CardEntities
                    title="Especie"
                    number={especie.length}
                    subTitle="especies"
                    handleClick={() => TipoCard("especie")}
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
                    tipo === "especie" &&
                        <HtmlEspecie />
                    
                }
            </main>
        </div>
    );
}

export default HomeAdm;
