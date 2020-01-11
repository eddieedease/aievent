import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';

import {
  Observable,
} from 'rxjs';
import { throttleTime } from 'rxjs/operators';

// import evironment for current dev bunlde
import {
  environment
} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerCredService {

  // vars for logging in
  isLoggedIn;

  constructor(private http: HttpClient, private router: Router) { }

  debugLog(logging: any) {
    if (environment.production !== true) {
      console.log(logging);
    }
    //
  }


  // API TESTCALL
  API_testCall(): Observable < any > {
    const url = environment.apilink + 'testcall?rnd=' + new Date().getTime();
    // tslint:disable-next-line:prefer-const

    const headers = {
      'Content-Type': 'application/json'
    };

    const headersConfig = new HttpHeaders(headers);

    const options = {
      headers: headersConfig
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get(url, options)
      .pipe(throttleTime(5000));
  }
}
