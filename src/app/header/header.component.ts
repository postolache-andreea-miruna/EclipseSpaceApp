import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
home(){
  document.getElementById("home")?.scrollIntoView();
}
simulator(){
  document.getElementById("eclipseSimulation")?.scrollIntoView();
}
solar(){
  document.getElementById("solarEclipse")?.scrollIntoView();
}
lunar(){
  document.getElementById("lunarEclipse")?.scrollIntoView();
}
}
