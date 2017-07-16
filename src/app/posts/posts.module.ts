import { NgModule } from '@angular/core';
import { SharedModule } from './../shared';
import { PostsRoutingModule } from './posts-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [SharedModule, PostsRoutingModule],
  declarations: [ListComponent, DetailComponent]
})
export class PostsModule {}
