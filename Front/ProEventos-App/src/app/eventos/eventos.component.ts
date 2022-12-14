import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos() : void{
    this.http.get('http://localhost:5000/api/eventos').subscribe(
      response => this.eventos = response,
      erros => console.log('erro')
    );

  }

}

