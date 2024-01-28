import React from "react";
import '../App.css';

class Login extends React.Component {
    fazerLogin = (
        <div>
            <input text="text" />
        </div>
    );
    render() {
        return (
            <div className="row overflow-hidden">
                <div className="col-6 border border-primary">
                    <div className="height100 mt-5 mb-5 rounded-end-circle border border-primary">
                        <div>
                            <h1>Bem vindo!</h1>
                            <p>Cuidar da saúde do seu pet, ficou ainda mais facíl e acessível.</p>
                            <p>Compre tudo o que o seu pet precisa e receba na sua casa.</p>
                            <button>Fazer login</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 border border-success">
                    <div>
                        {this.fazerLogin}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;