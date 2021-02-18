export class Usuario{
    /**
     *
     */
    constructor() {        
        this.id_Usuario = 0;
        this.nome_Usuario = '';
        this.email_Usuario = '';
        this.cpf_Usuario = '';
        this.data_Nascimento = '';
        this.usuario_Tipo_Id = 0;
    }

    id_Usuario: number;
    nome_Usuario: string;
    email_Usuario: string;
    cpf_Usuario: string;
    data_Nascimento: string;
    usuario_Tipo_Id: number;

}