import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  url= 'https://api.github.com/users'

  fetchUser = () => {
    this._http.get(this.url)
  }
}
