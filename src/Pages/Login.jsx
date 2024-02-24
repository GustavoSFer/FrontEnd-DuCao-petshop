import React, { useState } from "react";
import '../App.css';
import Button from "../Components/Button";
import Input from "../Components/Input";
import { verificaNome, verificaEmail, verificaCPF, verificaSenha, verificaMesmaSenha } from "../Util/validaLogin";
import { entrarLogin, novoUsuario } from "../Util/HttpUsuario";
import { useNavigate } from "react-router-dom";

function Login() {
    const history = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [entrar, setEntrar] = useState(true);
    const [nome, setNome] = useState();
    const [email, SetEmail] = useState();
    const [cpf, setCpf] = useState();
    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();
    const [telefone, setTelefone] = useState("");
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState("");


    const click = () => {
        setIsLogin(false);
        setEntrar(false);
    }

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
            setData(result);

            redirectPage(result);
        }
    }

    const EntrarSistema = () => {

        if (isLogin){
            setEntrar(false);
        } else {
            setEntrar(false);
            setIsLogin(true);
        }
    }

    const loginEntrar = async(e) => {
        e.preventDefault();
        const params = {
            email,
            senha
        }

        const data = await entrarLogin(params);

        if (data != "" && data == 404) {
            setMsg("E-mail ou senha incorreto!");
        } else {
            setMsg("");
            setData(data);

            redirectPage(data);
        }
    }

    const redirectPage = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        if (user.administrador) {
            history("/homeAdm")
        } else {
            history("/home")
        }
    }

        return (
            <div className="row overflow-hidden bg-warning">
                <div className="col-6">
                    <div className="height100 mt-5 mb-5 rounded-end-circle bg-light">
                        <div className="position-absolute">
                            <h1 className="title">Seja Bem Vindo!</h1>
                            <p className="mt-5">
                                Cuidar da saúde do seu pet, ficou ainda mais facíl e acessível.
                               <br />Compre tudo o que o seu pet precisa e receba na sua casa.
                            </p>
                            <Button handleClick={click}>Cadastrse-se</Button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="text-end p-3 pe-5">
                        <Button handleClick={EntrarSistema}>Login</Button>
                        
                    </div>
                    <div className=" position-absolute-right bg-warning">
                        {
                            isLogin && entrar ?
                            <div className="width-text">
                                <h2 className="subtitle">Cuidamos do seu pet como se fosse da família!</h2>
                                <p className="mt-3">
                                    Oferecemos todos os serviços para o seu animalzinho
                                    de estimação, buscando sempre unir qualidade no atendimento ao carrinho. 
                                </p>
                                <p>
                                    Aqui você encontra especialidades da odontologica e cuida da saúde oral do seu pet até acupuntura.
                                </p>
                            </div>
                            :
                            isLogin && !entrar ?
                            <div className="shadow p-3 mb-5 rounded width-login">
                                <form>
                                    <Input type="email" labelTxt="E-mail:" value={email} handleChange={(e) => SetEmail(e.target.value)} />
                                    <Input type="password" labelTxt="Senha:" value={senha} handleChange={(e) => setSenha(e.target.value)} />
                                    <div className="text-end text-danger">
                                    { msg }
                                    </div>
                                    <div className="text-end">
                                        <Button handleClick={loginEntrar}>Entrar</Button>
                                    </div>
                                </form>
                            </div>
                            :
                            <div className="shadow p-3 mb-5 rounded width-login">
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
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
}

export default Login;
