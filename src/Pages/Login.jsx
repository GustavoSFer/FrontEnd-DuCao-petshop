import React, { useState } from "react";
import '../App.css';
import Button from "../Components/Button";
import Input from "../Components/Input";

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const click = () => {
       setIsLogin(!isLogin)
    }

    const salvarUsuario = (e) => {
        e.preventDefault();
        console.log("Salvar!");
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
                    <div className=" position-absolute-right bg-warning">
                        {
                            isLogin ?
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
                            <div className="shadow p-3 mb-5 rounded width-login">
                                <form>
                                    <Input type="text" labelTxt="Nome:" />
                                    <Input type="email" labelTxt="E-mail:" />
                                    <Input type="text" labelTxt="CPF:" />
                                    <Input type="numeric" labelTxt="Telefone:" />
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