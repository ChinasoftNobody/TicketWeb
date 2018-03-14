import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginRegisterComponent} from '../main/login-register/login-register.component';
import {ScenicComponent} from '../main/scenic/scenic.component';
import {StoreComponent} from '../main/store/store.component';
/**
 * Created by Administrator on 2017/5/28.
 */
const routes: Routes = [
  {path: '', redirectTo: '/scenic', pathMatch: 'full'},
  {path: 'index', component: LoginRegisterComponent},
  {path: 'scenic', component: ScenicComponent},
  {path: 'store', component: StoreComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}

