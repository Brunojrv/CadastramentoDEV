import { GithubService } from './../../core/services/github.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  GitUsername: string;
  gitUser: any;

  constructor(private gitService: GithubService, private router: Router) {
    this.GitUsername = '';
  }

  ngOnInit(): void {}

  public pesquisar(): void {
    console.log(this.GitUsername);
    if (this.GitUsername === '') {
      console.log('1');
      return;
    } else {
      console.log('2');
      this.gitService
        .pesquisar(this.GitUsername)
        .subscribe((usuario: any) => {
          console.log(usuario);
          this.gitUser = usuario;
        })
        .add(() => {
          this.router.navigate([`about`], { state: this.gitUser });
        });
    }
  }
}
