import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics = []

  constructor(private topicsService: TopicService, private router: Router) { }

  ngOnInit() {
    this.topicsService.getTopics()
      .subscribe(
        res => this.topics = res,
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 403){
              this.router.navigate(['/login'])
            }
          }
        }
      )
  }
}
