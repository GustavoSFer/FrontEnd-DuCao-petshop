import { createUser, loginUser } from '../Service';

const novoUsuario = async(body) => {
    const data = await createUser("/usuarios", body);

    return data;
};

const entrarLogin = async(params) => {
    const data = await loginUser("/usuarios/login", params);

    return data;
};

export {
    novoUsuario,
    entrarLogin
}