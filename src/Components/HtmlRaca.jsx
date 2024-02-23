import React, { useState, useEffect } from 'react';
import TdRaca from './TdRaca';
import Input from './Input';
import Button from './Button';

function HtmlRaca() {
    const [racasDb, setRacasDb] = useState("");
    const [raca, setRaca] = useState("");
    const [msg, setMsg] = useState("");
    const [btnChildren, setBtnChildren] = useState("Cadastrar");
    const [id, setId] = useState("");

    const getFindAllRacas = () => {

    }

    //componentDidMount
    useEffect(() => {
        getFindAllRacas();
    }, []);

    const salvarRaca = () => {

    };

    const removeClick = () => {

    };

    const editar = () => {

    };


    return (
        <div>
           <form>
                <Input type="text" labelTxt="Raça:" value={raca} handleChange={(e) => setRaca(e.target.value)} />
                   
                <div className="text-end">
                    <Button handleClick={salvarRaca}>{btnChildren}</Button>
                </div>
                <div className="text-end">
                    { msg }
                </div>
            </form>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                Nome
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            racasDb.map((item) => (
                                <TdRaca  key={item.id} item={item} remove={removeClick} edit={editar} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HtmlRaca;
