import { Component, OnInit } from '@angular/core';
import { Post, ApiService } from './../../shared';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public post: Post;
  constructor(private api: ApiService) {}

  ngOnInit() {}
}
