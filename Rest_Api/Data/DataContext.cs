using System.Collections.Generic;
using Api_Asp.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_Asp.Data{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { 
            
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<UsuarioTipo> Usuario_Tipo { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Usuario>()
                .HasKey(AD => new { AD.Id_Usuario });

            builder.Entity<UsuarioTipo>()
                    .HasKey(AD => new { AD.Id});
        }       
    }    
}