import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { getAll } from '../Service';

function HtmlAbrirAgenda() {
    const [dataInicial, setDataInicial] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [horaInicial, setHoraInicial] = useState("");
    const [horaFinal, setHoraFinal] = useState("");
    const [duracao, setDuracao] = useState("");

    const salvarAgenda = (e) => {
        e.preventDefault();
        console.log(dataInicial)
    };

    const  getFindAllAgenda = async() => {
        const agendas = getAll();
    };

     //componentDidMount
     useEffect(() => {
        getFindAllAgenda();
    }, []);

    return(
        <div>
            <form className='border border-secondary-subtle m-2 shadow p-2 mb-5 rounded'>
                <div className="d-flex justify-content-between">
                    <Input type="date" labelTxt="Data inicial" value={dataInicial} handleChange={(e) => setDataInicial(e.target.value)} />
                    <Input type="date" labelTxt="Data final" value={dataFinal} handleChange={(e) => setDataFinal(e.target.value)} />
                </div>
                <div className="d-flex justify-content-between">
                    <Input type="text" labelTxt="Hora inicial" value={horaInicial} handleChange={(e) => setHoraInicial(e.target.value)} placeholder="08:00" />
                    <Input type="text" labelTxt="Hora final" value={horaFinal} handleChange={(e) => setHoraFinal(e.target.value)} placeholder="11:30" />
                </div>
                <Input type="text" labelTxt="Duração" value={duracao} handleChange={(e) => setDuracao(e.target.value)} placeholder="30 (em minuto)" />
                   
                <div className="text-end">
                    <Button handleClick={salvarAgenda}>Salvar</Button>
                </div>
               
            </form>
            <div>
                mostrar agenda
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
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HtmlAbrirAgenda;
