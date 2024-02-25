import {
    create,
    login,
    deletar,
    update
} from '../Service';

const novoUsuario = async(body) => {
    const data = await create("/usuarios", body);

    return data;
};

const atualizarUsuario = async(body, id) => {
    const data = await update(`/usuarios/${id}`, body);

    return data;
};

const entrarLogin = async(params) => {
    const data = await login("/usuarios/login", params);

    return data;
};

const deleteUsuario = async(id) => {
    const data = await deletar(`/usuarios/${id}`);

    return data;
}

export {
    novoUsuario,
    entrarLogin,
    deleteUsuario,
    atualizarUsuario,
}