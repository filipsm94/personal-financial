import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  host: {class: 'ds-fx-ct'}
})
export class UserComponent implements OnInit {
  public userInfoForm: FormGroup;

  public hasError = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userInfoForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      email: new FormControl(null, [
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
  get email(): any { return this.userInfoForm.get('email'); }
  get celular(): any { return this.userInfoForm.get('celular'); }
  get genero(): any { return this.userInfoForm.get('genero'); }

  ngOnInit(): void {
  }

  async sendInfoUser(){
    try {
      await this.userService.saveUser({...this.userInfoForm.value});
      this.goToDashboard();
    } catch (error) {
      alert("Hay un error, cierra sesión")
    }

  }


  public goToDashboard(): void{
    this.router.navigate(['/dashboard']);
  }

}
