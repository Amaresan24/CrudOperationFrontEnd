import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  emp: Employee = new Employee();
  id: number;

  constructor(
    private es: EmployeeService,
    private route: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.ar.snapshot.params['id'];
    this.es.getByid(this.id).subscribe((X) => {
      this.emp = X;
    });
  }

  submit() {
    this.es.update(this.emp, this.id).subscribe(
      (response) => {
        alert('Updated successfully'); // Ensure 'alert' is in lowercase
        // Uncomment the line below to navigate after updating
        // this.route.navigate(["viewEmployee"]);
      },
      (error) => {
        console.error('Error updating employee:', error);
        alert('Failed to update employee');
      }
    );
  }
  

  back() {
    this.route.navigate(['View']);
  }
}









// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';

// @Component({
//   selector: 'app-update-employee',
//   templateUrl: './update-employee.component.html',
//   styleUrls: ['./update-employee.component.css'],
// })
// export class UpdateEmployeeComponent {
//   constructor(
//     private es: EmployeeService,
//     private route: Router,
//     private ar: ActivatedRoute
//   ) {}

//   emp: Employee = new Employee();
//   id: number;
//   ngOnInit() {
//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.
//     this.id = this.ar.snapshot.params['id'];
//     this.es.getByid(this.id).subscribe((X) => {
//       this.emp = X;
//     });
//   }
//   submit() {
//     this.es.update(this.emp, this.id);
//   }

//   back() {
//     this.route.navigate(['View']);
//   }
// }
