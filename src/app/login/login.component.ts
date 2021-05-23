import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from './login.service';

import {TokenService} from 'src/common/interceptor/token.service';
import {Res, User} from '../class/class-model';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loading = false;
  scale = 1;
  validateForm: FormGroup;
  user: User = new User();

  @HostListener('window:resize', ['$event'])
  onresize(event): void {
    let size = event.target.outerHeight / 768;
    if (size > 1.2) {
      size = 1.2;
    }
    if (size < 1) {
      size = 1;
    }
    this.scale = size;
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private renderer: Renderer2,
    private tokenService: TokenService,
    private  messageService: NzMessageService
  ) {
  }

  ngOnInit() {

  }


  submit() {
    this.loginService.login(this.user).subscribe((res: Res) => {
      if (res.msgCode === 0) {
        this.messageService.success('登录成功');
        this.saveToken(res.access_token);
        this.getUserInfo();
      }
    });
  }

  saveToken(token: string) {
    this.tokenService.setToken(token);
  }

  getUserInfo() {
    this.loginService.getUser().subscribe((res: Res) => {
      console.log(res);
      if (res.msgCode === 0) {
        this.router.navigate(['/welcome'])
      }
    });
  }


  getScale() {
    return {
      transform: `scale(${this.scale})`
    };
  }


}
