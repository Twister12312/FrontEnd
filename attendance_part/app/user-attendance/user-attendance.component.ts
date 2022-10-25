import { AttendanceService } from './../attendance.service';
import { Attendance } from './../attendance';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl} from '@angular/forms'
@Component({
  selector: 'app-user-attendance',
  templateUrl: './user-attendance.component.html',
  styleUrls: ['./user-attendance.component.css']
})
export class UserAttendanceComponent implements OnInit {
  atdDetail !: FormGroup;
  atdObj : Attendance=new Attendance;
  atnList : Attendance[] = [];
  atdid!: number;
  edata!: String;
  constructor(private formBuilder : FormBuilder, private atnService : AttendanceService) { }

  ngOnInit(): void {

    let data=localStorage.getItem('empid');
    if(data!=null){
      this.edata=data.replace(/['"]+/g, '');
      console.log(this.edata);
      this.getAttById(this.edata);
    }
    
    this.getAttById(this.edata);
    this.atdDetail = this.formBuilder.group({
      employeeid : [''],
      date : [''],
      status: ['']
      
    });
  }
  addAttendance(empid:any ) {
    let data={
      
      "date":"2022-06-30",
      "status":"Leave"
      
      }
    // console.log(this.atdDetail);
    // this.atdObj.employeeid = this.atdDetail.value.employeeid;
    // this.atdObj.date = this.atdDetail.value.date;
    // this.atdObj.status = this.atdDetail.value.status;

    this.atnService.addAttendance(data,empid).subscribe(res=>{
        console.log(res);
        // this.getAllAttendance();

      },err=>{
        console.log(err);
    });

  }
  getAttById(id: String) {
    this.atnService.getAttById(id).subscribe(res=>{
        this.atnList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  getAllAttendance() {
    this.atnService.getAllAttendance().subscribe(res=>{
        this.atnList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

 editAttendance(atn:Attendance) {
    // console.log(atn.employeeid);
    // this.atdid = atn.employeeid;

    this.atdDetail.controls['employeeid'].setValue(atn.employeeid);

    this.atdDetail.controls['date'].setValue(atn.date);
    this.atdDetail.controls['status'].setValue(atn.status);
  
    
  }

  updateAttendance() {
    console.log("update");
  
    this.atdObj.employeeid = this.atdDetail.value.employeeid;
    this.atdObj.date = this.atdDetail.value.date;
    this.atdObj.status = this.atdDetail.value.status;
  
    this.atnService.updateAttendance(this.atdObj).subscribe(res=>{
      console.log(res);
      let cancel=document.getElementById("cancel");
        cancel?.click();
      this.getAllAttendance();
    },err=>{
      console.log(err);
    })
  
  
  }

  deleteAttendance(atn : Attendance) {

    this.atnService.deleteAttendance(atn).subscribe(res=>{
      console.log(res);
      alert('Attendance deleted successfully');
      this.getAllAttendance();
    },err => {
      console.log(err);
    });
  
  }
}


