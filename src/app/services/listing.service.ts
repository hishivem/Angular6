import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Headers, Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private headers = new Headers();

  constructor(private http:Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getListData() {
    return this.http.get(environment.host_port + 'identifier/', {headers: this.headers})
  }
}
