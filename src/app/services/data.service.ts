import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Componente} from "../common/interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http: HttpClient = inject(HttpClient); // estamos injectando un objeto ya hecho y confugurado de httpclient (en vez de new HttpClient)

  constructor() {}

  // esta funcion nos devuelve Observable de tipo Componente que traerá los datos con la estructura de la interfaz
  // el usar la interfaz es para que tenga claro con que estructura se recibirán los datos desde la petición http.

  getComponentesMenu(): Observable<Componente[]>{ // Observable se usa para que espere a que llegen los datos para terminar la función
    return this.http.get<Componente[]>('/assets/data/menu.json')
    //le estamos diciendo que va a recibir datos desde esa direccion con escructura Componente[] y que lo retorne
  }
}
