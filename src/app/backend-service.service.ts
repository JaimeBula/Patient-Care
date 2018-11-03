import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]>{
      return this.http.get<Patient[]>('./assets/data/patients.json');
  }
}
