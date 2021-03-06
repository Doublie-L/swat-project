import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {ShareModule} from '../../common/share.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent,
    }]),
  ],

})
export class LoginModule {
}
