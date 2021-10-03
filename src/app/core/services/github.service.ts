import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param user será o nome do usuário a ser capturado
   */
  public pesquisar(user: string): Observable<any> {
    const url = `https://api.github.com/users/${user}`;
    return this.http.get(url);
  }
}
