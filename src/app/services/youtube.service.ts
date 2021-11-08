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
  private playlisteGoogle = "PLqtSFRmgPpYGM6jyjddP1-rtpZkwnPyRf";
  //private playlistStudent2020 = "PLqtSFRmgPpYHdIFtSiLRtMMSDtc3_Tg7b";
  private playlistStudent = "PLqtSFRmgPpYEUaoEjb7egx1XSaR6WilrM";

  private playlistTeacher = "PLqtSFRmgPpYEijcskh8nRdD1DhBY7k9JU";

  //private playlistTeacherManagement2020 = "PLqtSFRmgPpYHVUDvKoDXu7z5CupI_UKyK";
  private playlistTeacherManagement = "PLqtSFRmgPpYF1SWFrcdYaVzE8QlEDMn1F";
  private playlistTeacherDesign = "PLqtSFRmgPpYEXh0dJia4QZC7hLlN_OUVu";
  private playlistTeacherEvaluation = "PLqtSFRmgPpYE3cHexMFoo3b_80138Bh-1";

  private playlistTools = "PLqtSFRmgPpYHsDEOTtLmottSvjN315r4j";

  private playlistworkshop = "PLqtSFRmgPpYEQsU82qIClMGMuTRULDv8B";

  private nextpageToken = "";

  constructor( private http: HttpClient) { }

  getVideosGoogle(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlisteGoogle)
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
  getVideosStudent(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistStudent)
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
  getVideosTeacher(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistTeacher)
      .set('maxResults','20')

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
  getVideosTeacherManagement(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistTeacherManagement)
      .set('maxResults','20')

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
  getVideosTeacherDesign(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistTeacherDesign)
      .set('maxResults','20')

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
  getVideosTeacherEvaluation(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistTeacherEvaluation)
      .set('maxResults','20')

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
  getVideosTools(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistTools)
      .set('maxResults','20')

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

  getVideosWorkshop(){
    var url = this.youtubeURL+'/playlistItems'
    const params = new HttpParams()
      .set('part','snippet')
      .set('key', this.apikey)
      .set('playlistId', this.playlistworkshop)
      .set('maxResults','20')

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
