import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  uploads = "UUX2NDVDViTR8Huqxf8-Oz_Q"

  private youtubeURL = "https://www.googleapis.com/youtube/v3"; 
  private apikey = "AIzaSyBZjOjowZu_rBbgTjAgLqT39cd8CMdVirU";
  private playlisteGoogle = "";
  private playlistEstudent = "";
  private playlistTeacher = "";
  private playlistPrueba = "PLqtSFRmgPpYFgA0hTua1vlljAe3VRfMX_";

  private nextpageToken = "";

  constructor( private http: HttpClient) { }

  getVideos(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistPrueba)
      .set('maxResults','10')

    return this.http.get<YoutubeResponse>(url, {params})
      .pipe(
        map( resp => {
          return resp.items;
        }),
        map( items=>{
          return items.map( video => video.snippet)
        })
      )
  }
}
