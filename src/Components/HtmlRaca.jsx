import React, { useState, useEffect } from 'react';
import TdRaca from './TdRaca';
import Input from './Input';
import Button from './Button';
import { createRaca, deleteRaca, getAll, updateRaca } from '../Service/raca';

function HtmlRaca() {
    const [racasDb, setRacasDb] = useState([]);
    const [raca, setRaca] = useState("");
    const [msg, setMsg] = useState("");
    const [btnChildren, setBtnChildren] = useState("Cadastrar");
    const [id, setId] = useState("");

    const getFindAllRacas = async() => {
        const data = await getAll("/racas");
        setRacasDb(data);
    }

    //componentDidMount
    useEffect(() => {
        getFindAllRacas();
    }, []);

    const salvarRaca = async(e) => {
        e.preventDefault();
        validaDados();
        if (msg == "") {
            const body = {
                nome: raca,
            }
            if (btnChildren == "Cadastrar") {
                await createRaca("/racas", body);
                setMsg("Raça cadastrado com sucesso")
                limpar();
                getFindAllRacas();
            } else {
                await updateRaca(`/racas/${id}`, body)
                limpar();
                getFindAllRacas();
            }
        }
    };

    const removeClick = async(item) => {
        await deleteRaca(`/racas/${item.id}`);
        setMsg("Raça deletado com sucesso!");
        getFindAllRacas();
    };

    const editar = (item) => {
        setBtnChildren("Atualizar");
        setId(item.id);
        setRaca(item.nome);
    };

    const validaDados = () => {
        setMsg("");
        if (raca == "") {
            setMsg("O nome da raça está vazia.")
        }
    }

    const limpar = () => {
        setRaca("");
        setBtnChildren("Cadastrar");
    }


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
            <div className='p-4'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                Editar
                            </th>
                            <th>
                                Nome
                            </th>
                            <th>
                                Excluir
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
