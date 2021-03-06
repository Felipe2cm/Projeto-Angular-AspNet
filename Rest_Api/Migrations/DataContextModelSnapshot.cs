﻿// <auto-generated />
using System;
using Api_Asp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Api_Asp.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9");

            modelBuilder.Entity("Api_Asp.Models.Usuario", b =>
                {
                    b.Property<int>("Id_Usuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Cpf_Usuario")
                        .HasColumnType("TEXT");

                    b.Property<string>("Data_Nascimento")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email_Usuario")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome_Usuario")
                        .HasColumnType("TEXT");

                    b.Property<int?>("Usuario_Tipo_Id")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id_Usuario");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("Api_Asp.Models.UsuarioTipo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Usuario_Tipo");
                });
#pragma warning restore 612, 618
        }
    }
}
