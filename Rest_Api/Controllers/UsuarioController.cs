using System;
using System.Threading.Tasks;
using Api_Asp.Data;
using Api_Asp.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api_Asp.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly IRepository context;

        public UsuarioController(IRepository _context)
        {
            context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await context.GetAllUsuariosAsync();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);                
            }
        }

        [HttpGet("{UsuarioId}")]
        public async Task<IActionResult> GetByUserId(int UsuarioId)
        {
            try
            {
                var result = await context.GetUsuarioAsyncById(UsuarioId);

                return Ok(result);
            }
           catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);                
            }
        }

        [HttpGet("GetByName/{userName}")]
        public IActionResult GetUserByName(string userName)
        {
            try
            {
                var result = context.GetUsuarioByName(userName);                

                return Ok(result);
            }
           catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);                
            }
        }
        
        [HttpPost]
        public async Task<IActionResult> Post(Usuario user)
        {
            try
            {
                context.Add(user);

                if(await context.SaveChangesAsync())
                {
                    return Ok(user);
                }

                return BadRequest();
            }
           catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);                
            }
        }

        [HttpPut("{UserId}")]
        public async Task<IActionResult> Put(int UserId, Usuario user)
        {
            try
            {
                var result = await context.GetUsuarioAsyncById(UserId);

                if(result == null)
                {
                    return NotFound("Usuário não encontrado.");
                }

                context.Update(user);

                if(await context.SaveChangesAsync())
                {
                    return Ok(user);
                }                
            }
           catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);                
            }

            return BadRequest();
        }

        [HttpDelete("{UserId}")]
        public async Task<IActionResult> Delete(int UserId)
        {
            try
            {
                var result = await context.GetUsuarioAsyncById(UserId);

                if(result == null)
                {
                    return NotFound();
                }

                context.Delete(result);

                if(await context.SaveChangesAsync())
                {
                    return Ok(result);
                }

                return BadRequest();
            }
           catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);                
            }
        }

        // UsuarioTipos Controller
        [HttpGet("tipos")]
        public async Task<IActionResult> GetUsuariosTipo()
        {
            try
            {
                var result = await context.GetUsuarioTipo();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);                
            }
        }

    }
}