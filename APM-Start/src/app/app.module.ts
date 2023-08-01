import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConverToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductionDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    StarComponent,
    ProductionDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
      { path : 'products', component: ProductListComponent },
      { path : "products/:id", canActivate: [ProductDetailGuard], component:ProductionDetailComponent},
      { path : "products/:id", component: ProductionDetailComponent },
      { path : "welcome", component: WelcomeComponent },
      { path : "", redirectTo: "welcome", pathMatch: "full" },
      { path : "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
