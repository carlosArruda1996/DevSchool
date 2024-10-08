import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.css'
})



export class ArtigosComponent {

  private apiUrl = "http://localhost:8080/api/articles";

  constructor(private http: HttpClient){}

}
