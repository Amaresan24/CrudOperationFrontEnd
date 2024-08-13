import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient  ) { }
baseUrl = "http://localhost:8080";
getAllEmp(){
return this.http.get<Employee[]>(`${this.baseUrl}/getfull_list`);
}
postEmployee(emp:Employee){
  return this.http.post<Employee>(`${this.baseUrl}/obj1`,emp);
}

getByid(id:number){
return this.http.get<Employee>(`${this.baseUrl}/getdetails_id/${id}`);

}

// update 
update(emp :Employee , id : number){
return this.http.put<Employee>(`${this.baseUrl}/Updatedetails_id/${id}`,emp);
}


// Delete

delete(id :number){
return this.http.delete<Employee>(`${this.baseUrl}/delete_id/${id}`);

}


}
