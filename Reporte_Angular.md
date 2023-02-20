
#  Ejercico 5 : Reparacion de servicios y componente heroes. (Este fue el primer problema que trabaje para poder visualizar algo y  seguir con el resto)

1. En servico heroes.services.ts


* Reparar decorador
~~~js
@Injectable({
  providedIn:'root'
})
~~~
3. Reparar  `interface`, tiene que considir con
los terminos del objeto `heroes`

~~~js
export interface Heroe{
  
  img: string;
  aparicion: string;
  casa: string;
  bio: string
  nombre: string
};
~~~

4. En heroes.component.ts


* Importo el servicio heroes e interface
* Inyecto en el constructor el servicio heroes e interface


~~~ts

import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
 

 constructor( 
               private router:Router,
               private _heroesService:HeroesService
                ) {
    // console.log("constructor");
  }

~~~

5. En el componete heroe-tarjeta.componete.html: agregar la biografia e imagen por interpolacion 

~~~html

<div class="card animated fadeIn fast" >

   <img class="card-img-top img-fluid" [src]="heroe.img" alt=""> // <--- imagen
  <div class="card-body">
    <h4 class="card-title">{{ heroe.nombre }}</h4>
    <p class="card-tex">{{heroe.bio}}</p> <-- Biografia
    <p class="card-text"><small class="text-muted">{{ heroe.aparicion }}</small></p>

~~~

**Con esto ya se ven las cartas en componente heroes**

# Ejercicio 1: Reparacion de Rutas

1. En app.routes.ts

* Crear los `path` a los componentes que estan en navbar.component.

~~~ts
 { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutComponent },
~~~

# Ejercicio 2:  Agregar heroes

1. En carpeta assets 
* Se deposita una imagen .png

2. En servico heroes.services.ts se crean las cartes de los nuevos heroes.

~~~ts
 {
      nombre: " Rorschach",
      bio: "Rorschach es...",
      img: "assets/img/rorschach.png",
      aparicion: "entre 1986 y 1987",
      casa: "DC"
   },
~~~

El poroceso se repitira 20 veces. Por motivos de tiempos solo pongo uno a manera de ejemplo. 

# Ejercicio 3 & 4 : Reparar botom, redirigir a componete Hero, y ver imagen. 

1. Hacer `path` en app.routes.ts

~~~ts
  { path: 'heroe/:id', component: HeroeComponent },
~~~
3. Poner link de componete hero en en el navbar.
~~~html
 <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" [routerLink]="['heroe/:id']"></a> <--- No es necesario que aparesca pintado en el nav  
      </li>
~~~
4. Descomenetar el botton en heroe-targeta y completar palabra index.

~~~html
 <a [routerLink]="['/heroe',index]" class="btn btn-outline-primary">Ver más link...</a> 
~~~

# 6. Bucador:

1. Revisar si el bucador esta configuarado en app.routes.ts
2. Descomente el `console.log` de `termino` en buscador.component.ts para ver si el bucador esta enrutando en consola.
3. Configurar el buscador.component.ts:

*  Inyectar el servicio HeroesService:

~~~ts
constructor( private activatedRoute:ActivatedRoute,
               private _heroesservice:HeroesService
             )
~~~

* Suscibir la data que llega al buscador a los metodos del servicio:

~~~ts
 
 this.activatedRoute.params.subscribe( params =>{

      console.log( this.heroes );
      this.heroes= this._heroesservice.buscarHeroes(params['termino'])

    });

  }
}
~~~

**Con esto se llena la variable local que se va pintar en la vista**

~~~ts
  heroes:any[] = []
~~~

**El html ya estaba configurado** con la variable

~~~html
<div class="row animated fadeIn fast" *ngIf="heroes.length == 0">
~~~