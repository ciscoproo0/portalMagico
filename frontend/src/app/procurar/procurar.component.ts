import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.component.html',
  styleUrls: ['./procurar.component.scss']
})
export class ProcurarComponent implements OnInit {

  cards: object;
  card: string;

  constructor(private _http: HttpService) { }

  ngOnInit() {

  }
  onKeydown(event){
    if(event.key === "Enter"){

      this._http.Cards(this.card).subscribe(data => {
        this.cards = data;
        console.log(this.cards);
      });
      this.card = "";
    }
  }

}
