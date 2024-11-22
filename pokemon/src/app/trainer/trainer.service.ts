import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private trainersUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/trainers.json';
  private trainerDetailUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/1/trainers.json';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<any> {
    return this.http.get<any>(this.trainersUrl);
  }

  getTrainerDetail(): Observable<any> {
    return this.http.get<any>(this.trainerDetailUrl);
  }

  
}
