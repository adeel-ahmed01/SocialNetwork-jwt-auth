import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TopicService {

  private topicsUrl = "http://localhost:8080/api/topics/all"
  constructor(private http: HttpClient) { }

  getTopics(){
    return this.http.get<any>(this.topicsUrl)
  }
}
