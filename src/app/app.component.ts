import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = true;
  title = 'Alexandria';
  constructor(public afAuth: AngularFireAuth, public auth: AuthService) { }

   user = AuthService
}
