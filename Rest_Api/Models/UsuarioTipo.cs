namespace Api_Asp.Models
{
    public class UsuarioTipo
    {   
        public UsuarioTipo(){ }

        public UsuarioTipo(int id, string nome)
        {
            this.Id = id;
            this.Nome = nome;
        }

        public int Id { get; set; }
        public string Nome { get; set; }
    }
}