import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ShardModule } from '../shard/shard.module';

const COMPONENTS = [
  PagesComponent,
  HomeComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ShardModule,
    PagesRoutingModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PagesModule { }
