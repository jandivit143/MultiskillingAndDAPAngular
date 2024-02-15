import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GreetComponent } from './components/greet/greet.component';
import { ProductsComponent } from './components/products/products.component';
import { CartDetailsComponent } from './components/cartdetails/cartdetails.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HooksChildComponent } from './components/life-cycle-hooks/hooks-child.component';
import { HooksComponent } from './components/life-cycle-hooks/hooks.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { DemopipesComponent } from './components/demopipes/demopipes.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'greet',
    component:GreetComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    children:[{
      path:':id',
      component:ProductdetailsComponent
    }]
  },
  {
    path:'cartdetails',
    component:CartDetailsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'lazy',
    loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule)
  },
  // use the below route for ngOnInit & ngOnDestroy
  // {
  //   path:'lifecyclehooks',
  //   component:HooksChildComponent
  // },
  // use the below route for ngOnChanges
  {
    path:'lifecyclehooks',
    component:HooksComponent
  },
  {
    path:'signupform',
    component:SignupformComponent
  },
  {
    path:'reactiveform',
    component:ReactiveformComponent
  },
  {
    path:'demopipes',
    component:DemopipesComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  // Default preloadingStrategy - NoPreloading
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]

  imports: [RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})],
  // imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  // Along with NoPreloading and PreloadAllModules you can even do custom preloadingStrategy.
  exports: [RouterModule]
})
export class AppRoutingModule { }
