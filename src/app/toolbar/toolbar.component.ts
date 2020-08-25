import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, Input } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() isShowMenu;

  @Output('toogleSideNav') toogleSideNav= new EventEmitter<void>();

  constructor(private sidenavService: SidenavService) { }


  ngOnInit() {
    console.log("test");
console.log(this.isShowMenu);

  }

  toggleSlide():void{
   this.toogleSideNav.emit();
  }

}
