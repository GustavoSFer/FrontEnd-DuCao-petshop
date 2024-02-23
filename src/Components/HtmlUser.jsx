import React, { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import {verificaNome, verificaEmail, verificaCPF, verificaSenha, verificaMesmaSenha } from "../Util/validaLogin";
import { novoUsuario, deleteUsuario, atualizarUsuario } from "../Util/HttpUsuario";
import { getAll } from '../Service';
import TdUser from './TdUser';

function HtmlUser() {

    const [nome, setNome] = useState("");
    const [email, SetEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const [telefone, setTelefone] = useState("");
    const [adm, setAdm] = useState("");
    const [msg, setMsg] = useState("");
    const [usuario, setUsuario] = useState([]);
    const [btnChildren, setBtnChildren] = useState("Cadastrar");
    const [id, setId] = useState("");

    const salvarUsuario = async (e) => {
        e.preventDefault();
        validaDados();
        if ( msg == "") {
            if (btnChildren == "Cadastrar") {
                const isValidNome = verificaNome(nome);
                const isvalidEmail = verificaEmail(email);
                const isValidCPF = verificaCPF(cpf);
                const isValidSenha = verificaSenha(senha);
                const mesmaSenha = verificaMesmaSenha(senha, senha2);
                
                if (!isValidSenha) {
                    alert("A senha deve conter no minimo 6 digitos e um caracter especial.");
                } else if (isValidNome && isvalidEmail && isValidCPF && mesmaSenha) {
                    cadastrar();
                }
            } else {
                atualizar();
            }
        } 
    }

    const cadastrar = async() => {
        const telefoneNumero = parseInt(telefone);
        const body = {
            nome,
            email,
            telefone: telefoneNumero,
            cpf,
            senha,
            administrador: adm
        }
        const result = await novoUsuario(body);
        if (result != null) {
            setMsg("Cadastro realizado com sucesso!");
            getFindAllUsuarios();
            limpar();
        }        
    };

    const atualizar = async() => {
        const telefoneNumero = parseInt(telefone);
        const body = {
            nome,
            email,
            telefone: telefoneNumero,
            cpf,
            administrador: adm
        }        
        await atualizarUsuario(body, id);
        setMsg("Atualização realizado com sucesso!");
        getFindAllUsuarios();
        limpar();        
        setBtnChildren("Cadastrar");
    };

    const valueSelect = (value) => {
        setAdm(value);
    };

    const getFindAllUsuarios = async () => {
        const users = await getAll("/usuarios");
        setUsuario(users);
    };

    const removeClick = async(item) => {
        const data = await deleteUsuario(item.id);
        getFindAllUsuarios();
        return data;
    };

    const limpar = () => {
        setNome("");
        SetEmail("");
        setCpf("");
        setTelefone("");
        setSenha("");
        setSenha2("");
        setId("");
    }

    const editar = (item) => {
        setBtnChildren("Atualizar")
        setNome(item.nome);
        SetEmail(item.email);
        setCpf(item.cpf);
        setTelefone(item.telefone);
        setId(item.id);
    }

    const validaDados = () => {
        setMsg("");
        if (nome == "") {
            setMsg("Nome está vazio.");
        }
        if (email == "") {
            setMsg("E-mail está vazio.");
        }
        if (cpf == "") {
            setMsg("CPF está vazio");
        }
        if (telefone == "") {
            setMsg("Telefone está vazio.");
        }
        if ( btnChildren != "Atualizar" && (senha == "" || senha2 == "")) {
            setMsg("Senha está vazia.");
        }       
    }
   

     //componentDidMount
    useEffect(() => {
        getFindAllUsuarios();
    }, [])

    return (
        <div>
            <form>
                <Input type="text" labelTxt="Nome:" value={nome} handleChange={(e) => setNome(e.target.value)} />
                <Input type="email" labelTxt="E-mail:" value={email} handleChange={(e) => SetEmail(e.target.value)} />
                <Input type="text" labelTxt="CPF:" value={cpf} handleChange={(e) => setCpf(e.target.value)} />
                <Input type="numeric" labelTxt="Telefone:" value={telefone} handleChange={(e) => setTelefone(e.target.value)} />
                <Input type="password" labelTxt="Senha:" value={senha} handleChange={(e) => setSenha(e.target.value)} />
                <Input type="password" labelTxt="Confirme a senha:" value={senha2} handleChange={(e) => setSenha2(e.target.value)} />
                <select name='isAdm' className='form-select mb-3' value={adm} onChange={(e) => valueSelect(e.target.value)}>
                    <option defaultValue="">Administrador</option>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
                <div className="text-end">
                    <Button handleClick={salvarUsuario}>{btnChildren}</Button>
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
                            <th>
                                CPF
                            </th>
                            <th>
                                E-mail
                            </th>
                            <th>
                                Telefone
                            </th>
                            <th>
                                Editar/Remover
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuario.map((item) => (
                                <TdUser  key={item.id} item={item} remove={removeClick} edit={editar} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HtmlUser;
