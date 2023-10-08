import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CodYoutubeVideoModel } from 'src/app/models/codYoutubeVideoModel';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit{
  public codYT: CodYoutubeVideoModel | undefined; 
  public sub: Subscription = new Subscription;
  currentVideoId="";

  player: any;
  playerVars: YT.PlayerVars = {
    start: 2
  };
  showPlayer: boolean = false;

 
  savePlayer(player:any){
    this.player= player;
    console.log('player instance', player);
  }

  ngOnInit(): void {
    this.currentVideoId = "_HGQZlK08gQ"; //id video youtube live
    this.showPlayer = true;
  }
  

 

}
