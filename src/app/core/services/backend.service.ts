import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  userList = [
    {
      git: 'thurcst',
      avatar: '.',
      nome: 'arthur',
      email: 'arthur@email.com',
      cidade: 'Camaragibe',
      formacao: 'Engenharia da Computação',
      tecnologia: 'Angular',
    },
    {
      git: 'brunojrv',
      avatar: '.',
      nome: 'bruno',
      email: 'bruno@email.com',
      cidade: 'Camaragibe',
      formacao: 'Analise e Desenvolvimento de Sistemas',
      tecnologia: 'Angular',
    },
  ];

  constructor() {}

  get users() {
    return this.userList;
  }

  public createUSer(user: any): void {
    this.userList.push(user);
  }
}
