import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FooterService {

  constructor(private http: Http) {}
  get() {
    return this.http.request('./config/footer.json')
      .map(response => response.json());
  }
}
