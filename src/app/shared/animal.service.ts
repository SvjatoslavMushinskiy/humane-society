import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './interfaces';

@Injectable({ providedIn: 'root' })
export class AnimalService {
  constructor(private http: HttpClient) {
  }

/*  create(post: Post): Observable<Post> {
    return this.http.post(`${ environment.fbDbUrl }/posts.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        };
      }));
  }*/

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`http://localhost:3000/animals`);
  }

/*  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.fbDbUrl}/posts/${id}.json`)
      .pipe(map((post: Post) => {
        return {
          ...post, id,
          date: new Date(post.date)
        };
      }));
  }*/
/*
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${ environment.fbDbUrl }/posts/${ id }.json`);
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.fbDbUrl}/posts/${post.id}.json`, post);
  }*/
}
