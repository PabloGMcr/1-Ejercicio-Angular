import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

   heroes:Heroe[] = [];

  constructor( 
               private router:Router,
               private _heroesService:HeroesService
                ) {
    // console.log("constructor");
  }

  ngOnInit():void {
     this.heroes = this._heroesService.getHeroes();
     console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['',idx] );
  }

}

