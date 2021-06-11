import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[//ponemos los compnentes que tenemos dentro del dir heroes
        HeroeComponent,
        ListadoComponent
    ],

    exports: [// ponelos los componentes qu evamos a mostar en el app.component.htmail(principal)
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule{

}