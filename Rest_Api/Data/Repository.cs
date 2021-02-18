using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api_Asp.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_Asp.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Usuario[]> GetAllUsuariosAsync()
        {
            IQueryable<Usuario> query = _context.Usuarios;                                                                                 

            query = query.AsNoTracking()
                         .OrderBy(c => c.Id_Usuario);

            return await query.ToArrayAsync();
        }
        public async Task<Usuario> GetUsuarioAsyncById(int usuarioId)
        {
            IQueryable<Usuario> query = _context.Usuarios;                            
            
            query = query.AsNoTracking()
                         .OrderBy(user => user.Id_Usuario)
                         .Where(user => user.Id_Usuario == usuarioId);

            return await query.FirstOrDefaultAsync();
        }

        public List<Usuario> GetUsuarioByName(string name)
        {
            var userList =  _context.Usuarios
                .FromSqlRaw("SELECT * FROM Usuarios WHERE nome_Usuario like " + "'" + name + "%'")
                .ToList();            

                return userList;
        }

        public async Task<UsuarioTipo[]> GetUsuarioTipo()
        {
            IQueryable<UsuarioTipo> query = _context.Usuario_Tipo;                                                                                 

            query = query.AsNoTracking()
                         .OrderBy(c => c.Id);

            return await query.ToArrayAsync();
        }
    }
}