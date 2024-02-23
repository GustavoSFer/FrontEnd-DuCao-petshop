import {
    createUser,
    loginUser,
    deleteUser,
    updateUser
} from '../Service';

const novoUsuario = async(body) => {
    const data = await createUser("/usuarios", body);

    return data;
};

const atualizarUsuario = async(body, id) => {
    const data = await updateUser(`/usuarios/${id}`, body);

    return data;
};

const entrarLogin = async(params) => {
    const data = await loginUser("/usuarios/login", params);

    return data;
};

const deleteUsuario = async(id) => {
    console.log(id)
    const data = await deleteUser(`/usuarios/${id}`);

    return data;
}

export {
    novoUsuario,
    entrarLogin,
    deleteUsuario,
    atualizarUsuario,
}