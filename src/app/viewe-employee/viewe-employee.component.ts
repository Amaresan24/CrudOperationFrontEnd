import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewe-employee',
  templateUrl: './viewe-employee.component.html',
  styleUrls: ['./viewe-employee.component.css']
})
export class VieweEmployeeComponent {

constructor (private es:EmployeeService, private route :Router,  private ar: ActivatedRoute){};
 emp:Employee = new Employee();
 id :number;

ngOnInit(){
  this.id = this.ar.snapshot.params["id"],
  this.es.getByid(this.id).subscribe(X =>{
    this.emp = X;
  });
}

back() {
  this.route.navigate(["View"]);
}


}
