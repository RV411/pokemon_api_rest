import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiServerUrl = environment.apiBaseUrl;
  // private apiURLPokemon="https://pokeapi.co/api/v2/pokemon";
  //allPokemons: Observable<Pokemon[]> | undefined;
  
 
  constructor(private http:HttpClient) { }

  public getPokemons(): Observable<Pokemon[]> {
    // this.allPokemons=
    console.log(this.http.get<Pokemon[]>(`${this.apiServerUrl}/all`))
    return this.http.get<Pokemon[]>(`${this.apiServerUrl}/all`);
  }

  public getPokemon(pokemonId: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiServerUrl}/${pokemonId}`);
  }

  // public getPokemons(limit:number,offset:number): Observable<Pokemon[]> {
  //   this.allPokemons=this.http.get<Pokemon[]>(`${this.apiURLPokemon}?limit=${limit}&offset=${offset}`)
  //   return this.allPokemons;
  // }

  // public getPokemon(pokemonId: string): Observable<Pokemon> {
  //   return this.http.get<Pokemon>(`${this.apiURLPokemon}/${pokemonId}`);
  // }
}
