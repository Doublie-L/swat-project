import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() {
  }

  getUrl(url: string): string {
    return '/api' + url;
  }

}
