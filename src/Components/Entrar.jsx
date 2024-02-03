import React from 'react';
import Input from './Input';
import Button from './Button';

function Entrar() {
    return (
        <div className="shadow p-3 mb-5 rounded width-login">
            <form>
                <Input type="email" labelTxt="E-mail:" />
                <Input type="password" labelTxt="Senha:" />
                <Button>Cadastrar</Button>                
            </form>
        </div>
    );
}

export default Entrar;
