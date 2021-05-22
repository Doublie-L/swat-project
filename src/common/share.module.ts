import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {Level3NodesDirective} from './directive/level3-nodes.directive';
import {PasswordConfirmDirective} from './directive/password-confirm.directive';
import {InputLimitDirective} from './directive/input-limit.directive';

@NgModule({
  declarations: [
    Level3NodesDirective,
    InputLimitDirective,
    PasswordConfirmDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    Level3NodesDirective,
    PasswordConfirmDirective,
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputLimitDirective
  ]
})
export class ShareModule {
}
