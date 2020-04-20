import { Component, OnInit } from '@angular/core';
import { GadgetsService } from '../../Services/gadgets.service';
import { Gadgets } from '../../Interfaces/gadgets';
import { Route, Router, ActivatedRoute } from '@angular/router';
import * as utils from "tns-core-modules/utils/utils";

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.component.html',
  styleUrls: ['./tech-details.component.css']
})
export class TechDetailsComponent implements OnInit {

    selection: string;
    gadget: Gadgets;
    link: string;
    image: string;

  constructor(private route: ActivatedRoute, private gadgetService: GadgetsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selection = params['data'];
   }); 
   this.gadget = this.gadgetService.getGadget(this.selection); 
   this.image = `~/Assets/images/${this.gadget.image}`;
  }

  openPage(){
    utils.openUrl(this.gadget.link);
  }

}
