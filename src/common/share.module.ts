import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {Level3NodesDirective} from './directive/level3-nodes.directive';
import {PasswordConfirmDirective} from './directive/password-confirm.directive';
import {InputLimitDirective} from './directive/input-limit.directive';


import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzTableModule} from 'ng-zorro-antd/table';



@NgModule({
  declarations: [
    Level3NodesDirective,
    InputLimitDirective,
    PasswordConfirmDirective,
  ],
  imports: [
    NzIconModule,
    NzCardModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzMenuModule,
    NzLayoutModule,
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
    InputLimitDirective,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzMenuModule,
    NzLayoutModule,
    NzCardModule,
    NzTableModule
  ]
})
export class ShareModule {
}
