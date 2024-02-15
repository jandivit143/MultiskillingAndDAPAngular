import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneComponent } from './components/lazy-one/lazyone.component';
import { LazyTwoComponent } from './components/lazy-two/lazytwo.component';
import { LazyRoutingModule } from './lazy-routing.module';



@NgModule({
  declarations: [
    LazyOneComponent,
    LazyTwoComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule {
  constructor(){
    console.log('Lazy Module loaded!');
  }
}
