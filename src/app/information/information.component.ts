import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple'
import { MethodsService } from '../methods.service';
import { MenstrualCycleInfo } from '../app-interface';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [RippleModule],
  templateUrl: './information.component.html',
styleUrl: './information.component.css'
})
export class InformationComponent {
data:MenstrualCycleInfo|undefined;
  constructor(private my:MethodsService){}
  display(date:string,number:number,cycle:number){
    this.data=this.my.calculateMenstrualCycle(date,number,cycle)
    console.log(this.data)
  }

}
