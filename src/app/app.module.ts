import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppHeaderComponent} from './common/header/app-header.component';
import {AppFooterComponent} from './common/footer/app-footer.component';
import {AppRouterModule} from './config/app.router.module';
import {MainComponent} from './main/main.component';
import {MenuComponent} from './common/header/menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ProjectComponent} from './main/project/project.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpService} from "./common/http/http.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent, AppHeaderComponent, AppFooterComponent, MainComponent, MenuComponent, ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [HttpService,HttpClient],
  bootstrap: [AppComponent, AppHeaderComponent, AppFooterComponent]
})
export class AppModule {
}
