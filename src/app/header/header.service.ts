import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeaderService {

  constructor(private http: Http) {}
  get() {
    return this.http.request('./config/header.json')
      .map(response => response.json());
  }
}
