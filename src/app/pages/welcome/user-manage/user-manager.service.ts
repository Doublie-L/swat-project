import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../../../common/service/url.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor(private  http: HttpClient,
              private url:UrlService) {
  }

  getAll():Observable<any> {
    const  url = this.url.getUrl('/admin-user/admin-users-info');
    return this.http.get(url)
  }
}
