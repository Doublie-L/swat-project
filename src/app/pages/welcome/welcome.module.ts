import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {ShareModule} from '../../../common/share.module';
import { UserManageComponent } from './user-manage/user-manage.component';



@NgModule({
  imports: [WelcomeRoutingModule,ShareModule],
  declarations: [WelcomeComponent, UserManageComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
