import { Component } from '@angular/core';
import { Gadgets } from '../../Interfaces/gadgets';
import { GadgetsService } from '../../Services/gadgets.service';
import { Router, NavigationExtras } from '@angular/router';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Tech_Gadgets_v2.0';
  
  gadgets: Array<Gadgets>;  

  constructor(private gadgetService: GadgetsService, private router: RouterExtensions) { }

  ngOnInit(): void{
    this.gadgets = this.gadgetService.getGadgets();
  }

  onTap(item: Gadgets){
    let navExtras: NavigationExtras = {
      queryParams:{
          "data" : item.name
      }
   }
    this.router.navigate(['/details'],{
      queryParams:{
        "data" : item.name
      },
      transition: {
        name: 'slide',
        duration: 400,
        curve: 'linear'
      }
    });
  }

}
