import { createUser } from '../Service';

const novoUsuario = async(body) => {
    const data = await createUser("/usuarios", body);

    return data;
}

export {
    novoUsuario,
}