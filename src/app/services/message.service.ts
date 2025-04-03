import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private _http: HttpClient
  ) { }

  //  url = "http://localhost/PHP/Exercise/my_portfolio/index.php"
  url = ""
  messageMe (data: any) {
    return this._http.post(`${this.url}`, data, {
    })
  }
}
