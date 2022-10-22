import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  empformlabel = 'Edit Employee';
  empformbtn = 'Update';
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {
  }
  addForm: FormGroup;
  editForm: FormGroup;
  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [],
      Name: ['', Validators.required],
      DOB: ['', Validators.required],
      EmailId: ['', Validators.required],
      HomeAddress: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Gender: ['', Validators.required],
    });

    const empid = Number(localStorage.getItem('editEmpId'));
    if (+empid > 0) {
      this.empService.getEmployeeById(+empid).subscribe(data => {
        this.editForm.patchValue(data);
      });
    }
  }

  onUpdate() {

    console.log('Update fire');
    this.empService.updateEmployee(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-emp']);
    },
      error => {
        alert(error);
      });
  }



}
