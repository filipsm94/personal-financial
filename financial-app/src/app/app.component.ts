import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoggedIn$: Observable<boolean> = of(false);
  public title = 'finantial-app';
  public showFiller = false;

  constructor(private authService: AuthService){

  }


  // async ngOnInit(): Promise<void> {
  //   this.isLoggedIn$ = this.authService.isLogged;
  // }
}
