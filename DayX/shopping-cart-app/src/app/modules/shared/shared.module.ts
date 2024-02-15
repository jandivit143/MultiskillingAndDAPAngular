import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCompOneComponent } from './components/sharedcompone.component';
import { SharedCompTwoComponent } from './components/sharedcomptwo.component';



@NgModule({
  declarations: [
    SharedCompOneComponent,
    SharedCompTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedCompOneComponent,
    SharedCompTwoComponent
  ]
})
export class SharedModule {
  constructor(){
    console.log('Shared Module loaded!');
  }
}
