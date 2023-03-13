import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    PagesRoutingModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PagesModule { }
