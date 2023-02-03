import { Component, OnInit } from '@angular/core';
import { getParsedCommandLineOfConfigFile } from 'typescript';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit{
  searchText:any = ''
  data = [
    { name: "Binisha", email:"bin@gmail.com", phone:1234567657, password:"bin123", address:"abcd" },
    { name: "Arya", email:"arya@gmail.com", phone:1234567654, password:"a123", address:"bcdf" },
    { name: "Binisha", email:"bin@gmail.com", phone:1234876657, password:"123", address:"home" },


  ];
  constructor(){}

  ngOnInit(): void {
    
  }
 
}
