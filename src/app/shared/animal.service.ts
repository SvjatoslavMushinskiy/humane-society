import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Animal } from './interfaces';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  data = new Subject<Animal[]>();

  constructor(private http: HttpClient) {
  }

/*  create(animal: Post): Observable<Post> {
    return this.http.animal(`${ environment.fbDbUrl }/posts.json`, animal)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...animal,
          id: response.name,
          date: new Date(animal.date)
        };
      }));
  }*/

  getAll(): void {
    this.http.get<Animal[]>(`http://localhost:3000/animals`)
      .subscribe((data: Animal[]) => this.data.next(data));
  }

  getById(id: string): Observable<Animal> {
    return this.http.get<Animal>(`http://localhost:3000/animals/${id}`);
  }

  editById(id: number, animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`http://localhost:3000/animals/${id}`, animal);
  }
/*
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${ environment.fbDbUrl }/posts/${ id }.json`);
  }

  update(animal: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.fbDbUrl}/posts/${animal.id}.json`, animal);
  }*/
}
