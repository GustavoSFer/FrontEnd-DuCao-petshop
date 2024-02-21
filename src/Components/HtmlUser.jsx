import React, { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { verificaNome, verificaEmail, verificaCPF, verificaSenha, verificaMesmaSenha } from "../Util/validaLogin";
import { novoUsuario, deleteUsuario } from "../Util/HttpUsuario";
import { getAll } from '../Service';
import TdUser from './TdUser';

function HtmlUser() {

    const [nome, setNome] = useState();
    const [email, SetEmail] = useState();
    const [cpf, setCpf] = useState();
    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();
    const [telefone, setTelefone] = useState("");
    const [adm, setAdm] = useState();
    const [msg, setMsg] = useState("");
    const [usuario, setUsuario] = useState([]);

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
                senha,
                administrador: adm
            }
            const result = await novoUsuario(body);
            if (result != null) {
                setMsg("Cadastro realizado com sucesso!");
                getFindAllUsuarios();
            }
        }
    }

    const valueSelect = (value) => {
        setAdm(value);
    }

    const getFindAllUsuarios = async () => {
        const users = await getAll("/usuarios");
        setUsuario(users);
    }

    const removeClick = async(item) => {
        const data = await deleteUsuario(item.id);
        getFindAllUsuarios();
        return data;
    }

    const editar = (item) => {
        console.log(item);
    }
   

     //componentDidMount
    useEffect(() => {
        getFindAllUsuarios();
    }, [])

    return (
        <div>
            <form>
                <Input type="text" labelTxt="Nome:" handleChange={(e) => setNome(e.target.value)} />
                <Input type="email" labelTxt="E-mail:" handleChange={(e) => SetEmail(e.target.value)} />
                <Input type="text" labelTxt="CPF:" handleChange={(e) => setCpf(e.target.value)} />
                <Input type="numeric" labelTxt="Telefone:" handleChange={(e) => setTelefone(e.target.value)} />
                <Input type="password" labelTxt="Senha:" handleChange={(e) => setSenha(e.target.value)} />
                <Input type="password" labelTxt="Confirme a senha:" handleChange={(e) => setSenha2(e.target.value)} />
                <select name='isAdm' className='form-select mb-3' onChange={(e) => valueSelect(e.target.value)}>
                    <option defaultValue="">Administrador</option>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
                <div className="text-end">
                    <Button handleClick={salvarUsuario}>Cadastrar</Button>
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
