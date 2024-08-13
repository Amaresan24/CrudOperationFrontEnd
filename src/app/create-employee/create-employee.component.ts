import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  constructor(private es: EmployeeService, private r1: Router) {}
  emp: Employee = new Employee();

  postEmp() {
    this.es.postEmployee(this.emp).subscribe(X=>alert("saved"));
  }
  
  back() {

    this.r1.navigate(["View"]);
  }

}


// import { Component } from '@angular/core';
// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css'],
// })
// export class CreateEmployeeComponent {
//   emp: Employee = new Employee();

//   constructor(private es: EmployeeService, private r1: Router) {}

//   postEmp() {
//     this.es.postEmployee(this.emp).subscribe({
//       next: (response) => {
//         alert('Employee saved successfully!');
//         this.r1.navigate(['View']);  // Navigate to the view page after saving
//       },
//       error: (err) => {
//         console.error('Error saving employee:', err);
//         alert('Failed to save the employee. Please try again.');
//       }
//     });
//   }

//   back() {
//     this.r1.navigate(['View']);
//   }
// }

