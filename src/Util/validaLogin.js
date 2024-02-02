const verificaNome = (nome) => {
    if (nome == "" || nome == null || nome.length <= 3 ) {
        return false;
    }
    return true;
}

const verificaEmail = (email) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
  };

const verificaCPF = (cpf) => {
    cpf = cpf.replace(".", "").replace("-","");
    cpf = cpf.replace(".", "").replace("-","");
    if (cpf.length <= 10 || cpf.length >= 12) {
        return false
    }
    return true;
}

const verificaSenha = (senha) => {
    if (senha.length < 6) {
        return false;
    }
    const regex = /\W|_/;

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
    verificaEmail,
    verificaCPF,
    verificaSenha,
    verificaMesmaSenha,
}