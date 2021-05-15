import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {'class': 'ds-fx-ct'}
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private infoLogin: any;

  public hasError = false;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
    });
    this.infoLogin = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  async loggIn(){
    this.infoLogin = {...this.loginForm.value};
    try {
      await this.authService.loginUser(this.infoLogin);
      this.goToDashboard();
    } catch (error) {
      this.hasError = true;
    }
  }

  public goToDashboard(): void{
    this.router.navigate(['/dashboard']);
  }
}
