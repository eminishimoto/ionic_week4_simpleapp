import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}
    myVariable:string = "The force with me!"; //add write variable 
    myVariable2:string = "Hello from cct!"; //add write variable 
    updateMyValue(){ //add
      this.myVariable = "Now the force is even stronger!";//add
    }
      updateMyValue2(){ //add
        this.myVariable2 = "Hello from Ionic mobile development!";//add
      } 
}
