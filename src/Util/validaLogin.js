const verificaNome = (nome) {
    if (nome == "" || nome.lenght < 3) {
        return "Nome não é valido!";
    }
    return null;
}

const isValidEmail = (email) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
  };

const verificaCPF = (cpf) => {
    if (cpf.lenght < 10 || cpf.lenght > 12) {
        return "CPF inválido!"
    }
    return null;
}

const verificaSenha = (senha) => {
    const regex = "/\W|_/";

   return regex.test(senha);
}

const verificaMesmaSenha = (senha, confirma) => {
    if (senha === confirma) {
        return true;
    }
    return false;
}

export {
    verificaNome,
    isValidEmail,
    verificaCPF,
    verificaSenha,
    verificaMesmaSenha,
}