import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyOneComponent } from './components/lazy-one/lazyone.component';
import { LazyTwoComponent } from './components/lazy-two/lazytwo.component';

const routes: Routes = [
    {
        path:'',
        component:LazyOneComponent
    },
    {
        path:'two',
        component:LazyTwoComponent
    }
];
/**
 * RouterModule.forRoot() method creates an NgModule that contains all the directives, the given routes and
 * router service itself.
 * RouterModule.forChild() method creates an NgModule that contains all the directives and the given routes
 * but doesn't include the router service.
 * You are basically telling Angular 'There is already a Router instance available in the app so please just
 * register all of these routes with that instance'.
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyRoutingModule { }