import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesservice:HeroesService
             ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{

      console.log( this.heroes );
      this.heroes= this._heroesservice.buscarHeroes(params['termino'])

    });

  }

}
