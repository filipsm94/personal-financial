import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, of } from 'rxjs';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatSidenav | undefined;

  public isLoggedIn$: Observable<boolean> = of(false);
  public title = 'finantial-app';
  public showFiller = false;

  constructor(private authService: AuthService){

  }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn$ = this.authService.isLogged;
  }

  close(){
    this.drawer?.close();
  }

  public logout(): void{
    this.close();
    this.authService.logoutUser();
  }
}
