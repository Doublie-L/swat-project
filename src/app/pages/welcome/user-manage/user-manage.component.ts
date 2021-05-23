import {Component, OnInit} from '@angular/core';
import {Res, User} from '../../../class/class-model';
import {UserManagerService} from './user-manager.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {
  listOfData: User[] = [];
  isVisible = false;

  user: User = new User();

  constructor(private  userManagerService: UserManagerService) {
  }

  ngOnInit(): void {
    this.getALLUser();
  }

  getALLUser() {
    this.userManagerService.getAll().subscribe((res: Res) => {
      if (res.msgCode === 0) {
        this.listOfData = res.msg;
      }
    });
  }

  editUser(){
    
  }

}
