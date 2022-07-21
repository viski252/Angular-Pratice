import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Pratice Tutorial';
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("toggle")
  }
}
