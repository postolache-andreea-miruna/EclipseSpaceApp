import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent 
  implements AfterViewInit {
    @ViewChild('sunElement') sunElement!: ElementRef;
    @ViewChild('earthElement') earthElement!: ElementRef;
    @ViewChild('moonElement') moonElement!: ElementRef;
  
    constructor() {}
  
    ngAfterViewInit() {
      // Wait for the DOM elements to be ready
      setTimeout(() => {
        this.checkForEclipse();
      }, 5000); // Pause for 5 seconds before checking for an eclipse
    }
  
    checkForEclipse() {
      const sunRect = this.sunElement.nativeElement.getBoundingClientRect();
      const earthRect = this.earthElement.nativeElement.getBoundingClientRect();
      const moonRect = this.moonElement.nativeElement.getBoundingClientRect();
  
      // Create a simple condition for a solar eclipse (dummy condition)
      const isSolarEclipse =
        Math.abs(sunRect.left - earthRect.left) < 10 &&
        Math.abs(sunRect.top - earthRect.top) < 10;
  
      // Create a simple condition for a lunar eclipse (dummy condition)
      const isLunarEclipse =
        Math.abs(earthRect.left - moonRect.left) < 10 &&
        Math.abs(earthRect.top - moonRect.top) < 10;
  
      if (isSolarEclipse) {
        alert('Solar Eclipse Detected!');
      } else if (isLunarEclipse) {
        alert('Lunar Eclipse Detected!');
      }
    }
  }


