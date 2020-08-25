import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../../../sidenav.service';
export interface Section {
  name: string;
  updated: string;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('slidemenu') public sidenav: MatSidenav;

  folders: Section[] = [
    {
      name: "Find People",
      updated:"camera_alt",
    },
    {
      name: "Messages",
      updated: "folder",
    },
    {
      name: "Event",
      updated: "calendar_today",
    },
  ];
  notes: Section[] = [
    {
      name: "Parametres",
      updated: "settings",
    },
    {
      name: "Mon Compte",
      updated: "rowing",
    },
  ];

  constructor(private sidenavService: SidenavService) { }
  ngOnDestroy(): void {
    this.sidenavService.setSidenav(null);
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }



}
