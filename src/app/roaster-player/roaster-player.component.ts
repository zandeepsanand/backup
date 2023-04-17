import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-roaster-player',
  templateUrl: './roaster-player.component.html',
  styleUrls: ['./roaster-player.component.scss']
})
export class RoasterPlayerComponent implements OnInit {
  playerdata: any;

  constructor( private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getPlayers().subscribe((res: any)=>{
      this.playerdata=res.data;
      // console.log(this.playerdata);    
    
    });
  }
  roaster(item:any){
    // console.log(item);
    let location=`${environment.ggeraPremade}?redirectTo=order`
    // let location=`${environment.ggeraPremade}/pro-player?id=${item.id}`
    window.location.href=location
    // console.log(location);
  }

}
