import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUsers } from './user-data-model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private _http: HttpClient) {
    this.url = "../assets/db.json";
   }

  public getUserProfiles(): Observable<IUsers[]>{
    return this._http.get<IUsers[]>(this.url).pipe(
      tap(res => console.log(res))
    );
  }
  public deleteUser(user: IUsers): Observable<IUsers>{
    const id = user.id;
    const url = `${this.url}/${id}`;
    console.log(id + url);
    return this._http.delete<IUsers>(url, httpOptions).pipe(
      tap(() => console.log(`deleted user with id: ${id}`))
    );
  }

  public addUser (user: IUsers): Observable<IUsers> {
    return this._http.post<IUsers>(this.url, user, httpOptions).pipe(
      tap((user: IUsers) => console.log(`added user with id=${user.id}`))
    );
  }

  public updateUser (user: IUsers): Observable<any> {
    return this._http.put(this.url, user, httpOptions).pipe(
      tap(() => console.log(`updated hero id=${user.id}`)),
    );
  }
}
