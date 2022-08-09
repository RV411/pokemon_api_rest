import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";

@Component({
  selector: 'pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemons:any[]=[];
  page:number=1;
  totalPokemons?:number;
  authError = false;
  authMessage = 'Ocurrio un error con la API';

  constructor(private serviceservice:ServiceService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
      this.serviceservice.getPokemons()
        .subscribe((response:any)=>{
          response.results.forEach((result: { name: string; }) => {
            this.serviceservice.getPokemon(result.name)
              .subscribe((uniqResponse:any)=>{
                this.pokemons.push(uniqResponse);
                
                console.log(JSON.stringify(this.pokemons))
              })
          });
        },
        (error: HttpErrorResponse) => {
          this.authError = true;
          if (error.status !== 400) {
            this.authMessage = 'Error en el Servidor, !Intentalo de nuevo!';
          }
        }
        )
  }

}




