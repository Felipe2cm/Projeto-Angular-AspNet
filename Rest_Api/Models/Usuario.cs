namespace Api_Asp.Models{
    public class Usuario{
        public Usuario() {  }

        public Usuario(int id, string nome, string email, string cpf, string data, int usuario_tipo) {
            this.Id_Usuario = id;
            this.Nome_Usuario = nome;
            this.Email_Usuario = email;
            this.Cpf_Usuario = cpf;
            this.Data_Nascimento = data;
            this.Usuario_Tipo_Id = usuario_tipo;
          }
        public int Id_Usuario { get; set; }
        public string Nome_Usuario { get; set; }
        public string Email_Usuario { get; set; }
        public string Cpf_Usuario { get; set; }
        public string Data_Nascimento { get; set; }    
        public int? Usuario_Tipo_Id { get; set; }
    }
}