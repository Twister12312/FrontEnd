import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders ,HttpClientModule} from '@angular/common/http';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  addAtnURL : string;
  getAtnURL : string;
  updateAtnUrl : string;
  deleteAtnUrl : string;
  getById: string;


  constructor(private HttpClient:HttpClient) {
    this. addAtnURL = "http://localhost:8085/Admin_attendance/create";
    this. getAtnURL = "http://localhost:8085/api/attendance/";
    this. updateAtnUrl = "http://localhost:8085/Admin_attendance";
    this. deleteAtnUrl="http://localhost:8085/api/attendance";
    this.getById = "http://localhost:8085/api/attendance/emp";
   }

  // getAttendanceList():Observable<Attendance[]>{
  //   return this.HttpClient.get<Attendance[]>(`${this.baseURL}`);
  // }

  addAttendance(attendance:any,empid:any):Observable<any>{
    return this.HttpClient.post(`http://localhost:8085/Admin_attendance/create/${empid}`,attendance);
  }
  getAttendanceByEmpId(id: number): Observable<any>{
    return this.HttpClient.get<Attendance>(`http://localhost:8085/Admin_attendance/${id}`);
  }

  updateAttendance(atn :Attendance) : Observable<any>{
    return this.HttpClient.put<Attendance>(this.updateAtnUrl+'/'+atn.employeeid, atn);
  }
  deleteAttendance(atn :Attendance):Observable<any>{
    return this.HttpClient.delete<Attendance>(this.deleteAtnUrl+ '/' +atn.employeeid);
  }
  getAttById(id: String): Observable<Attendance[]>{
    return this.HttpClient.get<Attendance[]>(`${this.getById}/${id}`);
  }

  getAllAttendance(): Observable<any>{
    return this.HttpClient.get<Attendance[]>(this.getAtnURL);
  }

  }

