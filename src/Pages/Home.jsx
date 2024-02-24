import React, { useState } from 'react';
import Header from '../Components/Header';
import CardEntities from '../Components/CardEntities';
import HtmlAnimal from '../Components/HtmlAnimal';
import HtmlEspecie from '../Components/HtmlEspecie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Home() {
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
                    title="Animal"
                    handleClick={() => TipoCard("animal")}
                >
                    <FontAwesomeIcon icon={faPaw} className='me-3' />
                </CardEntities>            
              
            </div>

            <main>
                {
                    tipo === "animal" ?
                        <HtmlAnimal />
                    :
                    tipo === "agenda" &&
                        <HtmlEspecie />
                    
                }
            </main>
        </div>
    );
}

export default Home;
