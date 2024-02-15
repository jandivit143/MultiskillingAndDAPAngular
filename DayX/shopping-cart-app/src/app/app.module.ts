import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';
import { GreetComponent } from './components/greet/greet.component';
import { AppIIComponent } from './components/appII/appII.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { SimplestandalonecompComponent } from './components/simplestandalonecomp/simplestandalonecomp.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';
import { ProductsComponent } from './components/products/products.component';
import { AddToCartComponent } from './components/addtocart/addtocart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { CartDetailsComponent } from './components/cartdetails/cartdetails.component';
import { CartService } from './services/cart.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HooksComponent } from './components/life-cycle-hooks/hooks.component';
import { HooksChildComponent } from './components/life-cycle-hooks/hooks-child.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { DemopipesComponent } from './components/demopipes/demopipes.component';
import { CaptionPipe } from './pipes/caption.pipe';
import { JustfilterPipe } from './pipes/justfilter.pipe';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    GreetComponent,
    AppIIComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    MenuComponent,
    ProductsComponent,
    AddToCartComponent,
    ProfileComponent,
    LoginComponent,
    CartDetailsComponent,
    WelcomeComponent,
    ProductdetailsComponent,
    PageNotFoundComponent,
    HooksComponent,
    HooksChildComponent,
    SignupformComponent,
    ReactiveformComponent,
    DemopipesComponent,
    CaptionPipe,
    JustfilterPipe,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // imported standalone component here
    SimplestandalonecompComponent,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  // providers: [MenuService],
  // providers: [CartService],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent,AppIIComponent]
})
export class AppModule { }
