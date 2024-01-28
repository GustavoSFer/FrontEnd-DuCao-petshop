import React from "react";
import '../App.css';
import Button from "../Components/Button";

function Login() {
    let clicado = false;
    const click = () => {
        console.log("Clicadoooo!")
        clicado = !clicado
        console.log(clicado)
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
                    <div>
                        {clicado ? <h1>fds</h1> : <p>kkkkk</p>}
                        {console.log(clicado)}
                    </div>
                </div>
            </div>
        );
}

export default Login;