import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonLabel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app2';
}
