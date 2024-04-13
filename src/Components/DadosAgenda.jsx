import React, { useState, useEffect } from 'react';

function DadosAgenda({ item }) {

    const [semana, setSemana] = useState("");
    const [dataFormatada, setDataFormatada] = useState("");

    const diaSemanaString = () => {
        switch(item.diaSemana) {
            case 1:
                setSemana("Domingo");
                break;
            case 2:
                setSemana("Segunda-Feira");
                 break;
            case 3:
                setSemana("Terça-Feira");
                break;
            case 4:
                setSemana("Quarta-Feira");
                break;
            case 5:
                setSemana("Quinta-Feira");
                break;
            case 6:
                setSemana("Sexta-Feira");
                break;
            case 7:
                setSemana("Sabado");
                break;
        }
        // Formatando a data para o formato dd/MM/yyyy
        let dataArr = item.data;
        dataArr = dataArr.split("-");
        let dataFormatada = dataArr[2] + "/" + dataArr[1] + "/" + dataArr[0]; 
        setDataFormatada(dataFormatada)
    }

    useEffect(() => {
        diaSemanaString();
    });

    return(
        <tr>
            <td>{dataFormatada}</td>
            <td>{item.hora}</td>
            <td>{semana}</td>
        </tr>
    );
};

export default DadosAgenda;
