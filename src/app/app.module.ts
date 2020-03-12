// angular
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

// その他
import { TopComponent } from './top/top.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { SideNavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SideNavComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    environment.production ? [] : AkitaNgDevtools,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
