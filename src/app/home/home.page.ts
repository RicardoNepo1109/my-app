import { Component } from '@angular/core';
import { IonHeader, IonContent ,IonFooter,IonButton} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent,IonFooter,IonButton],
})
export class HomePage {
  public number: number = 0;
  constructor() {}
}
