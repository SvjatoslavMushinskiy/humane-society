import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Animal } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  data = new Subject<Animal[]>();

  constructor(private http: HttpClient) {
  }

  getAll(): void {
    this.http.get<Animal[]>(`http://localhost:3000/animals`)
      .subscribe((data: Animal[]) => this.data.next(data));
  }

  getById(id: string): Observable<Animal> {
    return this.http.get<Animal>(`http://localhost:3000/animals/${ id }`);
  }

  editById(id: number, animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`http://localhost:3000/animals/${ id }`, animal);
  }
}
