import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[//ponemos los compnentes que tenemos dentro del dir heroes
        ContadorComponent
        
    ],

    exports: [// ponelos los componentes qu evamos a mostar en el app.component.htmail(principal)
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule{

}