import { createUser } from '../Service';

const novoUsuario = (body) => {
    console.log("novooo");
    const data = createUser("/usuarios", body);

    return data;
}

export {
    novoUsuario,
}