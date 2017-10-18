import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiYoutubeComponent } from './api-youtube/api-youtube.component';

import { ApiYoutubeService } from './api-youtube/api-youtube.service';
import { ApiYoutubePipePipe } from './api-youtube/api-youtube-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApiYoutubeComponent,
    ApiYoutubePipePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiYoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
