import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  host: {'class': 'ds-fx-ct'}
})
export class UserComponent implements OnInit {
  public userInfoForm: FormGroup;
  private infoLogin: any;

  public hasError = false;

  constructor() {
    this.userInfoForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      correo: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      celular: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      genero: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
    });
  }

  get name(): any { return this.userInfoForm.get('name'); }
  get correo(): any { return this.userInfoForm.get('correo'); }
  get celular(): any { return this.userInfoForm.get('celular'); }
  get genero(): any { return this.userInfoForm.get('genero'); }

  ngOnInit(): void {
  }

  async sendInfoUser(){
    // await this.userService.setUserInfo({...this.loginForm.value});
  }

}
