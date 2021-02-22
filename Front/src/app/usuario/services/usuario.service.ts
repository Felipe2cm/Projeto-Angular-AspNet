import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public baseUrl = `${environment.mainUrl}/usuario`;

  constructor(private http: HttpClient) { }
    

  async getAll()
  {
    var response = (await axios.get(`${this.baseUrl}`)).data;
          
    return response;
    
  }

  async get(id: number)
  {
    var response = (await axios.get(`${this.baseUrl}/${id}`)).data

    return response;
  }

  // get(id: number): Observable<Usuario>{
  //   return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  // }

  // getByName(nome: string): Observable<Usuario[]>
  // {
  //   return this.http.get<Usuario[]>(`${this.baseUrl}/GetByName/${nome}`);
  // }

  async getByName(nome: string)
  {
    var response = (await axios.get(`${this.baseUrl}/GetByName/${nome}`)).data;

    return response;
  }

  // post(user: Usuario)
  // {
  //   return this.http.post<Usuario>(`${this.baseUrl}`, user);
  // }

  async post(user: Usuario)
  {
    var response = (await axios.post(`${this.baseUrl}`, user)).data;
    
    return response;
  }

  // put(user: Usuario)
  // {
  //   return this.http.put<Usuario>(`${this.baseUrl}/${user.id_Usuario}`, user);
  // }

  async put(user: Usuario)
  {
    var response = (await axios.put(`${this.baseUrl}/${user.id_Usuario}`, user)).data
    
  }

  // delete(user: Usuario)
  // {
  //   return this.http.delete<Usuario>(`${this.baseUrl}/${user.id_Usuario}`);
  // }

  async delete(user: Usuario)
  {
    var response = (await axios.delete(`${this.baseUrl}/${user.id_Usuario}`)).data;
    
    return response;
  }

  async getTipos()
  {
    var response = (await axios.get(`${this.baseUrl}/tipos`)).data;
    
    return response;    
  }
}
