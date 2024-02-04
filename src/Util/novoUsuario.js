import { createUser, loginUser } from '../Service';

const novoUsuario = async(body) => {
    const data = await createUser("/usuarios", body);

    return data;
};

const entrarLogin = async(body) => {
    const data = await loginUser("/usuarios", body);

    return data;
};

export {
    novoUsuario,
    entrarLogin
}