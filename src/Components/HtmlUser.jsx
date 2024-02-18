import React, { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { verificaNome, verificaEmail, verificaCPF, verificaSenha, verificaMesmaSenha } from "../Util/validaLogin";
import { novoUsuario } from "../Util/novoUsuario";
import { getAll } from '../Service';

function HtmlUser() {

    const [nome, setNome] = useState();
    const [email, SetEmail] = useState();
    const [cpf, setCpf] = useState();
    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();
    const [telefone, setTelefone] = useState("");
    const [msg, setMsg] = useState("");
    const [usuario, setUsuario] = useState([]);
    const [raca, setRaca] = useState([]);
    const [especie, setEspecie] = useState([]);

    const salvarUsuario = async (e) => {
        e.preventDefault();
        
        const isValidNome = verificaNome(nome);
        const isvalidEmail = verificaEmail(email);
        const isValidCPF = verificaCPF(cpf);
        const isValidSenha = verificaSenha(senha);
        const mesmaSenha = verificaMesmaSenha(senha, senha2);

        if (!isValidSenha) {
            alert("A senha deve conter no minimo 6 digitos e um caracter especial.");
        }

        if (isValidNome && isvalidEmail && isValidCPF && mesmaSenha) {
            const telefoneNumero = parseInt(telefone);
            const body = {
                nome,
                email,
                telefone: telefoneNumero,
                cpf,
                senha
            }
            const result = await novoUsuario(body);
            if (result != null) {
                setMsg("Cadastro realizado com sucesso!")
            }
        }
    }

    const getFindAllUsuarios = async () => {
        const users = await getAll("/usuarios");
        setUsuario(users);
    }
    const getFindAllRaca = async () => {
        const racas = await getAll("/racas");
        setRaca(racas);
    }
    const getFindAllEspecie = async () => {
        const especies = await getAll("/especies");
        setEspecie(especies);
    }

     //componentDidMount
    useEffect(() => {
        getFindAllUsuarios();
        getFindAllRaca();
        getFindAllEspecie();
    }, [usuario, raca, especie])

    return (
        <div>
            <form>
                <Input type="text" labelTxt="Nome:" handleChange={(e) => setNome(e.target.value)} />
                <Input type="email" labelTxt="E-mail:" handleChange={(e) => SetEmail(e.target.value)} />
                <Input type="text" labelTxt="CPF:" handleChange={(e) => setCpf(e.target.value)} />
                <Input type="numeric" labelTxt="Telefone:" handleChange={(e) => setTelefone(e.target.value)} />
                <Input type="password" labelTxt="Senha:" handleChange={(e) => setSenha(e.target.value)} />
                <Input type="password" labelTxt="Confirme a senha:" handleChange={(e) => setSenha2(e.target.value)} />
                <div className="text-end">
                    <Button handleClick={salvarUsuario}>Cadastrar</Button>
                </div>
                <div className="text-end">
                    { msg }
                </div>
            </form>
            <div>
                <ul>
                    <li>hehee</li>
                    <li>hehee</li>
                    <li>hehee</li>
                </ul>
            </div>
        </div>
    )
}

export default HtmlUser;
