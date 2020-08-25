import { Component, ViewChild, Renderer, ElementRef, AfterViewInit, ChangeDetectionStrategy } from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MatSidenav, MatDrawer } from "@angular/material";
import { SidenavService } from "./sidenav.service";




@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ transform: 'translateX(0)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate(3000)
  //     ]),
  //     transition('* => void', [
  //       animate(3000, style({ transform: 'translateX(100%)' }))
  //     ])
  //   ])
  // ]
})
export class AppComponent implements AfterViewInit {
  title = "app";
  //@ViewChild('slidemenu') slidemenu: ElementRef;
   private _slidemenu: boolean;
  public get slidemenu(): boolean {
    //console.log("dans slidemenu()"+this.sidenav.exist())
    return this.sidenav.exist();
  }
  public set slidemenu(val:boolean) {
    console.log("dans slidemenu()"+this.sidenav.exist())
    this._slidemenu= this.sidenav.exist();
  }





  constructor(private sidenav: SidenavService){}
  ngAfterViewInit(): void {
    //throw new Error("Method not implemented.");
  }
  openSlide():void{
    //console.log(this.toto);

    this.sidenav.toggle();
  }

//   onActivate(componentReference:MatDrawer) {
//     console.log("toto");
//     console.log(componentReference);
//     this.slidemenu =componentReference;
//    // componentReference.toggle();
//  }

}
