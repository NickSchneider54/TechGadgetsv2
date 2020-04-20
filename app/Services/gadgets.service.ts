import { Injectable } from '@angular/core';
import { Gadgets } from '../Interfaces/gadgets';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {

  private selectedGadget = new Subject<string>();

  private gadgets = new Array<Gadgets>(
    { name: "Huion GT-191 KAMVAS Drawing Table", image: "drawingtablet.jpg", link: "https://www.amazon.com/KAMVAS-Drawing-Monitor-Battery-free-Pressure/dp/B07FCB98BD/ref=asc_df_B07FCB98BD/?tag=hyprod-20&linkCode=df0&hvadid=309777534894&hvpos=1o1&hvnetw=g&hvrand=17070922632377808662&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9023771&hvtargid=pla-571092209675&psc=1&tag=&ref=&adgrpid=58425267301&hvpone=&hvptwo=&hvadid=309777534894&hvpos=1o1&hvnetw=g&hvrand=17070922632377808662&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9023771&hvtargid=pla-571092209675" }, 
    { name: "Razer Tomahawk", image: "razertomahawk.jpg", link: "https://www.razer.com/concepts/razer-tomahawk"},
    { name: "Dell XPS 13", image: "dellxps13.jpg", link: "https://www.amazon.com/Dell-InfinityEdge-Graphics-Windows-XPS7390-7681SLV-PUS/dp/B07XYTC8WG/ref=sr_1_3?crid=1H2EP6PY7BI0G&keywords=dell+xps+13&qid=1582064479&s=electronics&sprefix=dell+xps%2Celectronics%2C484&sr=1-3" }, 
    { name: "AOC Agon AG352UCG6 Black Edition", image: "monitor.jpg", link: "https://www.amazon.com/AOC-AG352UCG6-Monitor-3440x1440-DisplayPort/dp/B07BMVNJZP" },
    { name: "Astro A50 Wireless", image: "headset.jpg", link: "https://www.amazon.com/dp/B07R4Q8FQY?tag=georiot-us-default-20&th=1&ascsubtag=trd-7465386573015391917-20" } 
  );

  constructor() { }

    getGadgets(): Array<Gadgets>{
      return this.gadgets;
    }

    getGadget(name:string): Gadgets{
      return this.gadgets.filter((gadget) => gadget.name === name)[0];
    }

    setGadget(gadget: string){
      this.selectedGadget.next(gadget);
    }

    getSelectedGadget(): Observable<string>{
      return this.selectedGadget.asObservable();
    }
    

    

}
