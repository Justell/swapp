import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSerializer, routerReducer } from './shared/router-store';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(routerReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    EffectsModule.forRoot([]),
    MatToolbarModule,
  ],
  declarations: [AppComponent, LayoutComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
