import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { TwitchPlayer } from 'twitch-player';





import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import { environment } from 'src/environments/environment';
import * as AOS from 'aos';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);





@Component({
  selector: 'app-premade-party',
  templateUrl: './premade-party.component.html',
  styleUrls: ['./premade-party.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class PremadePartyComponent implements OnInit {
  empdata: any;

  
  showMe=true;
  dummydata=[
    {
        "party": {
            "name": "Ripzz",
            "orderId": "85759143",
            "streamLink": "gegrch?v=OjPshaSPLUk",
            "description": "fgfg",
            "serverDescription": "gfgfg",
            "platform": "PC",
            "startedTime": "2023-01-16T16:47:56.726Z",
            "status": "OPEN"
        },
        "slots": [
            {
                "type": "PRO",
                "username": "Ripzz",
                "gamerId": "Ripzz",
                "activisionId": "RipzzTEST",
                "region": "europe",
                "platform": "PC",
                "kd": "999",
                "winRatio": "999",
                "wins": "100",
                "kills": "100",
                "profileImageUrl": "https://ggera-images.s3.us-east-2.amazonaws.com/assets/img/no-profile-picture-icon.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ4H2Y2BK2XVEGLJB%2F20230117%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230117T100400Z&X-Amz-Expires=900&X-Amz-Signature=3c0a2a382439061ee6e935dbdf08d4a26ff2b1fe1f3553f20d04acea9522b9a7&X-Amz-SignedHeaders=host",
                "status": "occupied"
            },
            {
                "type": null,
                "status": "opened"
            },
            {
                "type": null,
                "status": "opened"
            },
            {
                "type": null,
                "status": "opened"
            }
        ],
        "totalSlots": 4,
        "availableSlots": 3
    },
    {
      "party": {
          "name": "Ripzz",
          "orderId": "85759143",
          "streamLink": "twitch.tv/Ripzzeu",
          "description": "fgfg",
          "serverDescription": "gfgfg",
          "platform": "PC",
          "startedTime": "2023-01-16T16:47:56.726Z",
          "status": "OPEN"
      },
      "slots": [
          {
              "type": "PRO",
              "username": "Ripzz",
              "gamerId": "Ripzz",
              "activisionId": "RipzzTEST",
              "region": "europe",
              "platform": "PC",
              "kd": "999",
              "winRatio": "999",
              "wins": "100",
              "kills": "100",
              "profileImageUrl": "https://ggera-images.s3.us-east-2.amazonaws.com/assets/img/no-profile-picture-icon.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ4H2Y2BK2XVEGLJB%2F20230117%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230117T100400Z&X-Amz-Expires=900&X-Amz-Signature=3c0a2a382439061ee6e935dbdf08d4a26ff2b1fe1f3553f20d04acea9522b9a7&X-Amz-SignedHeaders=host",
              "status": "occupied"
          },
          {
            "type": "CLIENT",
            "username": "Sandeep",
            "gamerId": "Ripzz",
            "activisionId": "RipzzTEST",
            "region": "europe",
            "platform": "PC",
            "kd": "999",
            "winRatio": "999",
            "wins": "100",
            "kills": "100",
            "profileImageUrl": "https://ggera-images.s3.us-east-2.amazonaws.com/1668687461486.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ4H2Y2BK2XVEGLJB%2F20230117%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230117T103414Z&X-Amz-Expires=900&X-Amz-Signature=a9312181cc1f54e17cc8b19bf85085e6fe0bc1e76bee982b46c9a1bb62d9952c&X-Amz-SignedHeaders=host",
            "status": "occupied"
        },
          {
              "type": null,
              "status": "opened"
          },
          {
              "type": null,
              "status": "opened"
          }
      ],
      "totalSlots": 4,
      "availableSlots": 2
  }
]

  constructor(private apiService:ApiService ) { }
  ngOnInit(): void {
    this.apiService.getParty().subscribe((res: any)=>{
      // console.log(res);
      
      this.empdata=res.data;
      console.log(this.empdata);    
     
    
    });
   
   
  }
  toggleTag(){
    this.showMe=!this.showMe
  }
  swiperConfig: any = {
    breakpoints: {
      // when window width is <= 499px
      400: {
        slidesPerView: 1,
        spaceBetweenSlides: 50
    },
    600: {
      slidesPerView: 2,
      spaceBetweenSlides: 50
  },


      799: {
          slidesPerView: 2,
          spaceBetweenSlides: 50
      },
      // when window width is <= 999px
      999: {
          slidesPerView: 3,
          spaceBetweenSlides: 50
      }
  
    }
}
premadeParty(item:any){
  console.log(item);
  let location=`${environment.ggeraPremade}?redirectTo=premade`
  // let location=`${environment.ggeraPremade}/premade-party?id=${item.id}`
  window.location.href=location
  // console.log(location);
  

}
// extractVideoId(url: string): string {
//   // Extract the video ID from the URL
//   const videoId = url.split('v=')[1];

//   return videoId;
// }
// isTwitchVideo(videoLink: string): boolean {
//   // Check if the video link is a Twitch video link
//   // Example: https://www.twitch.tv/videos/VIDEO_ID
//   const regex = /(?:https?:\/\/)?(?:www\.)?twitch\.tv\/videos\/(\d+)/;
//   return regex.test(videoLink);
// }

// extractTwitchVideoId(videoLink: string): string {
//   // Extract the Twitch video ID or username from the video link
//   // Example: https://www.twitch.tv/videos/VIDEO_ID
//   // or https://www.twitch.tv/USERNAME
//   const regex = /(?:https?:\/\/)?(?:www\.)?twitch\.tv\/(?:videos\/(\d+)|(\w+))/;
//   const match = videoLink.match(regex);
//   return match ? match[1] || match[2] : '';
// }
isTwitchLink(link: string): boolean {
  // Check if the link is a valid Twitch link
  return /^https?:\/\/(www\.)?twitch\.tv\/[\w]{1,}$/.test(link);
}

isYouTubeLink(link: string): boolean {
  // Check if the link is a valid YouTube link
  const regex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=([\w-]{11})).*|^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]{11})$/;
  return regex.test(link);
}

extractTwitchChannel(link: string): string {
  // Implement logic to extract the Twitch channel from the link
  // Example implementation assuming Twitch channels are included after "https://www.twitch.tv/" in the link
  return link.replace('https://www.twitch.tv/', '');
}

extractVideoId(link: string): string {
  // Implement logic to extract the YouTube video ID from the link using a regular expression
  const regex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=([^&]+)).*|^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/;
  const match = link.match(regex);
  if (match) {
    // If the regex match is successful, return the video ID
    return match[1] || match[2] || '';
  } else {
    // If no match is found, return an empty string
    return '';
  }
}

}
