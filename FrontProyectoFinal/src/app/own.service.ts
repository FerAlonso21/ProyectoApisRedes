import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnService {

  constructor(public httpClient:HttpClient) { }

  comics(){
    return this.httpClient.get("http://192.168.1.239:3000/marvel/getComics");
  }
}
