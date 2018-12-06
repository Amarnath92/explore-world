import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { TripCategoryBannerComponent } from './trip-category-banner/trip-category-banner.component';
import { RecommendedDealsComponent } from './recommended-deals/recommended-deals.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    TripCategoryBannerComponent,
    RecommendedDealsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
