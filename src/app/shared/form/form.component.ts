import { BackendService } from './../../core/services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  user: string;
  avatarUrl: string;
  name: string;
  email: string;
  cidade: string;
  formacao: string;
  tecnologia: string;

  constructor(private backend: BackendService) {
    this.user = '';
    this.avatarUrl = '';
    this.name = '';
    this.email = '';
    this.cidade = '';
    this.formacao = '';
    this.tecnologia = '';
  }

  ngOnInit(): void {}

  /**
   * registrar
   */
  public registrar(): void {
    this.backend.createUSer({
      git: this.user,
      avatar: this.avatarUrl,
      nome: this.name,
      email: this.email,
      cidade: this.cidade,
      formacao: this.formacao,
      tecnologia: this.tecnologia,
    });

    this.user = '';
    this.avatarUrl = '';
    this.name = '';
    this.email = '';
    this.cidade = '';
    this.formacao = '';
    this.tecnologia = '';
  }
}
