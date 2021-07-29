import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor() { }


  alertMe(){
    alert("Jah, nupp tõepoolest toimib!")
  }

  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}


  

  ngOnInit(): void {
  }

}
