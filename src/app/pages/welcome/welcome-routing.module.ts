import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {UserManageComponent} from './user-manage/user-manage.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
    children: [{
      path: 'user-manage',
      component: UserManageComponent,
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {
}
