import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
   }
   Cards(card: String)
   {
     return this.http.post('http://localhost:3000/cards', {card: card});
   }

}
