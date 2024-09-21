import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {americanFootball, beaker, card, grid, logoAppleAppstore} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor() {
    addIcons({card,beaker,americanFootball, logoAppleAppstore,grid})
    // si tienes iconos de ionic en la aplicación se deben añadir al constructor de la
    // aplicación para poder usarlos en ella con addIcons({...})


  }
}
