import React, { useState } from "react";
import '../App.css';
import Button from "../Components/Button";

function Login() {
    const [isLogin, setIsLogin] = useState(false);

    const click = () => {
       setIsLogin(!isLogin)
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
                        {isLogin ? <h1>fds</h1> : <p>kkkkk</p>}
                    </div>
                </div>
            </div>
        );
}

export default Login;