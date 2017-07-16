import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from './../models';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .map((res: Response): any => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Response status: ' + res.status);
        }
        const body = res.json();
        // this._cache.store(res.url, body || {});
        return body || {};
      });
  }

  getPost(id: number): Observable<Post> {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .map((res: Response): any => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Response status: ' + res.status);
        }
        const body = res.json();
        // this._cache.store(res.url, body || {});
        return body || {};
      });
  }
}
