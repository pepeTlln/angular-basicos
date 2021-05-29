import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes:string[]=['Spiderman', 'Ironman','Hulk', 'Thor']
  heroeBorrado: string=''
  constructor() { 
    
  }

  borrandoHeroe()  {
    //this.heroes.shift(); //Borra el primero
     this.heroeBorrado =this.heroes.pop() || '';
     //return this.heroeBorrado;
  }
  
}
