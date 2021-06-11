import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    //devuelve en nombre en mayusculas
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        // lo mismo de abajo return this.nombre + ' - ' + this.edad  
        return `${this.nombre} - ${this.edad}` // permite crear template 
    }

    cambiarNombre(): void{
    this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 25;
    }
}