import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem, IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {DataService} from "../../services/data.service";
import {Componente} from "../../common/interfaces";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonListHeader, IonItem, IonIcon, IonLabel, RouterLink]
})
export class InicioPage implements OnInit {
  private dataService: DataService = inject(DataService); // para poder acceder a las funciones creadas en nuestro dataservice
  componentes : Componente[] = []

  constructor() { }

  ngOnInit() {
    this.loadComponentes() // para que recoga los datos nada mas se carge inicio
  }

  private loadComponentes(): void {
    this.dataService.getComponentesMenu().subscribe( // al ser un Observable hay que suscribirse para recibir los datos correctamente
        {
          // lo que recibes si funciona se guarda en value, que a la vez es el parametro de la funcion de las llaves donde guardamos en la variable lo recibido
          next: value=> {
            this.componentes = value;
    },
          error: err => {
            console.error(err);
    },
          complete: () => {
            console.log('Componentes cargados');
          }
        }
    )
  }
}
