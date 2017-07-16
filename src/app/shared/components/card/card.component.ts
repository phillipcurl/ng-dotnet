import { Component, Input } from '@angular/core';
import { Post } from './../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public post: Post;

  constructor() {}
}
