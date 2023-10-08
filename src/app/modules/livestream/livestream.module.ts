import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live/live.component';
import { LivestreamRoutingModule } from './livestream-routing.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';



@NgModule({
  declarations: [
    LiveComponent
  ],
  imports: [
    CommonModule,
    LivestreamRoutingModule,
    NgxYoutubePlayerModule.forRoot()

  ]
})
export class LivestreamModule { }
