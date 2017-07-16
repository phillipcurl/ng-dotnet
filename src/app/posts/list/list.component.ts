import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post, ApiService } from './../../shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public posts: Observable<Post[]>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.posts = this.api.getPosts();
  }
}
