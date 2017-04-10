import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AppDescriptorService {
  private config: any;

  constructor(private http: Http) {}

  load(fileName: string): any {
    return this.http.request('./config/' + fileName + '.json')
      .map(response => response.json());
  }

  get(): any {
    return this.config;
  }
}
