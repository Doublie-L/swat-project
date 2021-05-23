import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ProduceAdmin} from '../../common/model/produce-admin';
import {UrlService} from '../../common/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient,
              private urlService: UrlService) {
  }

  login(admin: ProduceAdmin): Observable<any> {
    const url = this.urlService.getUrl('/auth/login');
    return this.http.post(url, admin);
  }

  getUser(){
    const url = this.urlService.getUrl('/profile');
    return this.http.get(url);
  }

  register(admin: ProduceAdmin) {
    const url = this.urlService.getUrl('/user/add');
    return this.http.post(url, admin);
  }


}
