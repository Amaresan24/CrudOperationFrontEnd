import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css'],
})
export class ViewListComponent {
  //id:number;
  constructor(private es: EmployeeService, private route: Router) {}
  emps: Employee[] = [];
  getallemps() {
    this.es.getAllEmp().subscribe((X) => {
      this.emps = X;
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getallemps();
  }
  create() {
    this.route.navigate(['create']);
  }

  view(id: number) {
    this.route.navigate(['viewEmployee', id]);
  }

  // update

  update(id: number) {
    this.route.navigate(['update', id]);
  }

  // Delete

  delete(id: number) {
    this.route.navigate(['View', id]);
  }

  deleteEmp(id: number) {
    this.es.delete(id).subscribe((x) => {
      alert('Deleted Succesfully');
      //this.getallemps();
    });
  }
}
