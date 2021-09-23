export interface Usuario {
    nome: string;
    login: string;
    dataCadastro: Date;
    dataAtualizacao: Date;
}

export interface PostUsuarioRequest {
    login: string;
    senha: string;
    nome: string;
}