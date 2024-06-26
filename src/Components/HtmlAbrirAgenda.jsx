import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import ButtonPagination from './ButtonPagination';
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
    const [msg, setMsg] = useState("");
    const [isOk, setIsOk] = useState(false);

    // Paginação
    const [itemPorPagina, setItemPorPagina] = useState(10);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const pages = Math.ceil(agenda.length / itemPorPagina); // Verificar quando paginas teremos
    const startIndex = paginaAtual * itemPorPagina; // Verifica qual a pagina que esta e multiplica pela quantidade que mostra por pagina (escolhi a pagina 1) = 1 * 10 = 10
    const endIndex = startIndex + itemPorPagina; // 10 + 10 = 20
    const itemAtual = agenda.slice(startIndex, endIndex); // 10 , 20 => mostra os item de 10 até 20

    const salvarAgenda = async (e) => {
        e.preventDefault();
        setMsg("");
        verificaInfoAgenda();

        if (isOk) {
            const params = {
                dataInicio,
                dataFim,
                horaInicio,
                horaFim,
                duracao,
            }
            const result = await saveAgenda("/agendas/abrirAgenda", params);
            getFindAllAgenda();
            setMsg(result)
        }       
    };

    const verificaInfoAgenda = () => {
        setIsOk(true);
        if (Date.parse(dataInicio) < Date.now()) {
            setMsg("O dia inicial não pode ser menor ou igual à hoje!");
            setIsOk(false);
        }
        if (Date.parse(dataFim) < Date.parse(dataInicio)) {
            setMsg("O dia final não pode ser menor do que a data inicial!");
            setIsOk(false);
        }
        if (dataFim == "" || dataInicio == "") {
            setMsg("Informe a data para abrir a agenda!");
            setIsOk(false);
        }
        if (horaInicio == "" || horaFim == "") {
            setMsg("Informe o horário para abrir a agenda!");
            setIsOk(false);
        }
        if (duracao == "") {
             setMsg("Informe a duração do banho!");
             setIsOk(false);
        }
    }

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
                {
                    <p className='text-end pt-3 text-danger'>{msg}</p>
                }
               
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
                            itemAtual.map((item) => (
                                <DadosAgenda key={item.id} item={item} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='pt-3 text-end'>
                {
                    Array.from(Array(pages), (item, index) => {
                        return (
                        <ButtonPagination
                            style="m-1"
                            key={index}
                            value={index}
                            handleClick={(e) => Number(setPaginaAtual(e.target.value))}
                            paginaAtual={paginaAtual}
                        >
                            {index + 1}
                        </ButtonPagination>
                        )
                    })
                }
            </div>
            
        </div>
    );
}

export default HtmlAbrirAgenda;
