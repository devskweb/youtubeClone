import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-row',
  templateUrl: './sidebar-row.component.html',
  styleUrls: ['./sidebar-row.component.css']
})
export class SidebarRowComponent implements OnInit {
  @Input() title;
  @Input() icon;
  @Input() selected="";
  
  constructor() { }

  ngOnInit(): void {
    
  }
  

}
