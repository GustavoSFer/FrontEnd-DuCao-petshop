import React, { useState, useEffect } from 'react';
import TdAnimal from './TdAnimal';
import Input from './Input';
import Button from './Button';
import Option from './Option';
import { create, deletar, update, getAll } from '../Service';
import moment from 'moment/moment';


function HtmlAnimal() {
    const [animaisDb, setAnimaisDb] = useState([]);
    const [racasDb, setRacasDb] = useState([]);
    const [raca, setRaca] = useState("");
    const [especiesDb, setEspeciesDb] = useState([]);
    const [especie, setEspecie] = useState("");
    const [nome, setNome] = useState("");
    const [peso, setPeso] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [msg, setMsg] = useState("");
    const [btnChildren, setBtnChildren] = useState("Cadastrar");
    const [id, setId] = useState("");
    const [user, setUser] = useState([]);

    const getFindAllAnimal = async() => {
        const data = await getAll("/animais");
        setAnimaisDb(data);
    };

    const getFindAllRaca = async () => {
        const racas = await getAll("/racas");
        setRacasDb(racas);
    };

    const getFindAllEspecie = async () => {
        const especies = await getAll("/especies");
        setEspeciesDb(especies);
    };

    //componentDidMount
    useEffect(() => {
        const userLocalStorage = localStorage.getItem('user');
        setUser(JSON.parse(userLocalStorage));
        getFindAllAnimal();
        getFindAllRaca();
        getFindAllEspecie();
    }, []);

    const salvarAnimal = async(e) => {
        e.preventDefault();
        validaDados();

        if (msg == "") {
            const body = {
                nome,
                peso: parseFloat(peso),
                nascimento,
                raca: {
                    "id": parseInt(raca),
                },
                especie: {
                    "id": parseInt(especie),
                },
                usuario: {
                    "id": parseInt(user.id)
                },
            }
            if (btnChildren == "Cadastrar") {
                console.log(body)
                await create("/animais", body);
                setMsg("Animal cadastrado com sucesso")
                limpar();
                getFindAllAnimal();
            } else {
                await update(`/animais/${id}`, body)
                limpar();
                getFindAllAnimal();
            }
        }
    };

    const removeClick = async(item) => {
        await deletar(`/animais/${item.id}`);
        setMsg("Animal deletado com sucesso!");
        getFindAllAnimal();
    };

    const editar = (item) => {
        setBtnChildren("Atualizar");
        setId(item.id);
        setRaca(item.raca.id);
        setEspecie(item.especie.id);
        setNome(item.nome);
        setPeso(item.peso);
        const formattedDate = item.nascimento.substring(0, 10);
        setNascimento(formattedDate);
    };

    const validaDados = () => {
        setMsg("");
        if (nome == "") {
            setMsg("O nome do animal está vazia.")
        }
        if (peso == "") {
            setMsg("Peso está vazio.");
        }
        if (nascimento == "") {
            setMsg("Data de nascimento está vazio.");
        }
        if (raca == "") {
            setMsg("Selecione a raça.");
        }
        if (especie == "") {
            setMsg("Selecione a especie.");
        }        
    };

    const limpar = () => {
        setBtnChildren("Cadastrar");
        setEspecie("");
        setRaca("");
        setNascimento("");
        setNome("");
        setPeso("");
    };

    const valueSelectEspecie = (value) => {
        setEspecie(value);
    };
    const valueSelectRaca = (value) => {
        setRaca(value);
    };


    return (
        <div>
           <form className='border border-secondary-subtle m-2 shadow p-2 mb-5 rounded'>
                <select name='especie' className='form-select mb-3' value={especie} onChange={(e) => valueSelectEspecie(e.target.value)}>
                   <option value="selecionar">Selecionar</option>
                   { 
                    especiesDb.map((item) => (<Option key={item.id} children={item.nome} value={item.id} />))
                   }
                </select>
                <Input type="text" labelTxt="Nome:" value={nome} handleChange={(e) => setNome(e.target.value)} />
                <Input type="text" labelTxt="Peso:" value={peso} handleChange={(e) => setPeso(e.target.value)} />
                <Input type="date" labelTxt="Nascimento:" value={nascimento} handleChange={(e) => setNascimento(e.target.value)} />
                <select name='raca' className='form-select mb-3' value={raca} onChange={(e) => valueSelectRaca(e.target.value)}>
                    <option value="selecionar">Selecionar</option>
                   { 
                    racasDb.map((item) => (<Option key={item.id} children={item.nome} value={item.id} />))
                   }
                </select>
                

                <div className="text-end">
                    <Button handleClick={salvarAnimal}>{btnChildren}</Button>
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
                                Raça
                            </th>
                            <th>
                                Especie
                            </th>
                            <th>
                                Peso
                            </th>
                            <th>
                                Nascimento
                            </th>
                            <th>
                                Excluir
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            animaisDb.map((item) => (
                                <TdAnimal  key={item.id} item={item} remove={removeClick} edit={editar} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HtmlAnimal;
