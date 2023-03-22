import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { UfunguoComponent } from './Ufunguo/ufunguo.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { ParallaxDirective } from './home/parallax.directive';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UfunguoComponent,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'ufunguo', component: UfunguoComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
