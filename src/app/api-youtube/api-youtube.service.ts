import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiYoutubeService {

  private query: string
  private BASE_URL: string = environment.BASE_URL
  private API_TOKEN: string = environment.API_TOKEN

  constructor(private _http:Http){}

  getVideo(query){
    return this._http.get(`${this.BASE_URL}?q=${query}&part=snippet&key=${this.API_TOKEN}`)
      .map(res => res.json())
      .map(json => json.items);
  }
}
