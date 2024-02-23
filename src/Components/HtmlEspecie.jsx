import React, { useState, useEffect } from 'react';
import TdRaca from './TdRaca';
import Input from './Input';
import Button from './Button';
import { create, deletar, update, getAll } from '../Service';

function HtmlEspecie() {
    const [especiesDb, setEspeciesDb] = useState([]);
    const [especie, setEspecie] = useState("");
    const [msg, setMsg] = useState("");
    const [btnChildren, setBtnChildren] = useState("Cadastrar");
    const [id, setId] = useState("");

    const getFindAllEspecie = async() => {
        const data = await getAll("/especies");
        setEspeciesDb(data);
    }

    //componentDidMount
    useEffect(() => {
        getFindAllEspecie();
    }, []);

    const salvarEspecie = async(e) => {
        e.preventDefault();
        validaDados();
        if (msg == "") {
            const body = {
                nome: especie,
            }
            if (btnChildren == "Cadastrar") {
                await create("/especies", body);
                setMsg("Especie cadastrado com sucesso")
                limpar();
                getFindAllEspecie();
            } else {
                await update(`/especies/${id}`, body)
                limpar();
                getFindAllEspecie();
            }
        }
    };

    const removeClick = async(item) => {
        await deletar(`/especies/${item.id}`);
        setMsg("Especie deletado com sucesso!");
        getFindAllEspecie();
    };

    const editar = (item) => {
        setBtnChildren("Atualizar");
        setId(item.id);
        setEspecie(item.nome);
    };

    const validaDados = () => {
        setMsg("");
        if (especie == "") {
            setMsg("O nome da especie está vazia.")
        }
    }

    const limpar = () => {
        setEspecie("");
        setBtnChildren("Cadastrar");
    }


    return (
        <div>
           <form>
                <Input type="text" labelTxt="Especie:" value={especie} handleChange={(e) => setEspecie(e.target.value)} />
                   
                <div className="text-end">
                    <Button handleClick={salvarEspecie}>{btnChildren}</Button>
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
                            especiesDb.map((item) => (
                                <TdRaca  key={item.id} item={item} remove={removeClick} edit={editar} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HtmlEspecie;
