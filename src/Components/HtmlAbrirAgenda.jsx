import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import DadosAgenda from './DadosAgenda';
import { getAll } from '../Service';
import saveAgenda from '../Service/agenda';

function HtmlAbrirAgenda() {
    const [dataInicio, setdataInicio] = useState("");
    const [dataFim, setdataFim] = useState("");
    const [horaInicio, sethoraInicio] = useState("");
    const [horaFim, sethoraFim] = useState("");
    const [duracao, setDuracao] = useState("");
    const [agenda, setAgenda] = useState([]);

    const salvarAgenda = async (e) => {
        e.preventDefault();

        const params = {
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            duracao,
        }
        await saveAgenda("/agendas/abrirAgenda", params);
        getFindAllAgenda();
    };

    const  getFindAllAgenda = async() => {
        setAgenda(await getAll("/agendas"));
    };

     //componentDidMount
     useEffect(() => {
        getFindAllAgenda();
    }, []);

    return(
        <div>
            <form className='border border-secondary-subtle m-2 shadow p-2 mb-5 rounded'>
                <div className="d-flex justify-content-between">
                    <Input type="date" labelTxt="Data inicial" value={dataInicio} handleChange={(e) => setdataInicio(e.target.value)} />
                    <Input type="date" labelTxt="Data final" value={dataFim} handleChange={(e) => setdataFim(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between">
                    <Input type="time" labelTxt="Hora inicial" value={horaInicio} handleChange={(e) => sethoraInicio(e.target.value)} placeholder="08:00" />
                    <Input type="time" labelTxt="Hora final" value={horaFim} handleChange={(e) => sethoraFim(e.target.value)} placeholder="11:30" />
                </div>
                <Input type="text" labelTxt="Duração" value={duracao} handleChange={(e) => setDuracao(e.target.value)} placeholder="30 (em minuto)" />
                   
                <div className="text-end">
                    <Button handleClick={salvarAgenda}>Salvar</Button>
                </div>
               
            </form>
            <div className="border border-light-subtle rounded-4 p-3">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                Data
                            </th>
                            <th>
                                Hora
                            </th>
                            <th>
                                Semana
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        agenda.map((item) => (
                            <DadosAgenda key={item.id} item={item} />
                        ))
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HtmlAbrirAgenda;
