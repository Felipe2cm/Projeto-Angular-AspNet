using System.Collections.Generic;
using System.Threading.Tasks;
using Api_Asp.Models;

namespace Api_Asp.Data
{
    public interface IRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //ALUNO
        Task<Usuario[]> GetAllUsuariosAsync();                
        Task<Usuario> GetUsuarioAsyncById(int alunoId);
        List<Usuario> GetUsuarioByName(string name);
        Task<UsuarioTipo[]> GetUsuarioTipo();

    }
}