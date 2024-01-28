import React, { useState } from "react";
import '../App.css';
import Button from "../Components/Button";
import Input from "../Components/Input";

function Login() {
    const [isLogin, setIsLogin] = useState(false);

    const click = () => {
       setIsLogin(!isLogin)
    }

    const salvarUsuario = (e) => {
        e.preventDefault();
        console.log("Salvar!");
    }


        return (
            <div className="row overflow-hidden">
                <div className="col-6 border border-primary">
                    <div className="height100 mt-5 mb-5 rounded-end-circle border border-primary">
                        <div className="position-absolute">
                            <h1>Bem vindo!</h1>
                            <p>
                                Cuidar da saúde do seu pet, ficou ainda mais facíl e acessível.
                               <br />Compre tudo o que o seu pet precisa e receba na sua casa.
                            </p>
                            <Button handleClick={click}>Fazer login</Button>
                        </div>
                    </div>
                </div>
                <div className="col-6 border border-success">
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded border border-secondary-subtle position-absolute-right">
                        {
                            isLogin ?
                            <h1>fds</h1>
                            :
                            <form>
                                <Input type="text" labelTxt="Nome:" />
                                <Input type="email" labelTxt="E-mail:" />
                                <Input type="text" labelTxt="CPF:" />
                                <Input type="numeric" labelTxt="Telefone:" />
                               <div className="text-end">
                                <Button handleClick={salvarUsuario}>Salvar</Button>
                               </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        );
}

export default Login;