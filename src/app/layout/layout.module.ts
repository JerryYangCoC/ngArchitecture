import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';


const COMPONENTS = [
  LayoutComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class LayoutModule { }
