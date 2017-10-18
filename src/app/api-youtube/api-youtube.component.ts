import { Component } from '@angular/core';
import { ApiYoutubeService } from './api-youtube.service';
import { ApiYoutubePipePipe } from './api-youtube-pipe.pipe';

@Component({
  selector: 'app-api-youtube',
  templateUrl: './api-youtube.component.html',
  styleUrls: ['./api-youtube.component.css']
})

export class ApiYoutubeComponent {
  videos:any[];
  videoFound: boolean = false;
  urlVideo: any;
  loadingVideo: boolean = false;

  handleSuccess(data){
    this.videoFound = true
    this.videos = data
    console.log(data)
  }

  handleError(error){
    console.log(error);
  }

  constructor(private _apiYoutubeService: ApiYoutubeService) {}

  searchVideos(query: string){
    this.loadingVideo = true
    return this._apiYoutubeService.getVideo(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.loadingVideo = false
    )
  }

}
