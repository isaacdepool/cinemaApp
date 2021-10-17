import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filter(array: any, texto: string, ){
    if(texto === ''){
      return array;
    }

    texto = texto.toLowerCase();
      
  return array.filter( (item:any) =>{
    return item['name'].toLowerCase()
    .includes( texto );
  });
  }
}
