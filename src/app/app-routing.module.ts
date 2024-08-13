import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { VieweEmployeeComponent } from './viewe-employee/viewe-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
{ path: 'View', component: ViewListComponent },
{path : '' ,redirectTo:"View" , pathMatch:"full"},
{path : "create", component: CreateEmployeeComponent},
{path : "viewEmployee/:id" , component: VieweEmployeeComponent},
{path : "update/:id" , component : UpdateEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
