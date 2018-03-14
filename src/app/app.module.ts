import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {LoginRegisterComponent} from './main/login-register/login-register.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpService} from './common/http/http.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {MatCardModule, MatExpansionModule, MatSelectModule, MatStepperModule} from '@angular/material';
import {ServerConfig} from './config/server.config';
import {SessionService} from './common/session.service';
import {EventService} from './common/event.service';
import {ScenicComponent} from './main/scenic/scenic.component';
import {StoreComponent} from './main/store/store.component';
@NgModule({
  declarations: [
    AppComponent, AppHeaderComponent, AppFooterComponent, MainComponent, MenuComponent, LoginRegisterComponent, ScenicComponent,
    StoreComponent
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
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatExpansionModule, MatSelectModule
  ],
  providers: [HttpService, HttpClient, ServerConfig, SessionService, EventService],
  bootstrap: [AppComponent, AppHeaderComponent, AppFooterComponent]
})
export class AppModule {
}
