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



  API_getusers(): Observable < any > {
    const url = environment.apilink + 'getusers?rnd=' + new Date().getTime();
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

  // is max form reaced?
  API_howmany(): Observable < any > {
    const url = environment.apilink + 'howmany?rnd=' + new Date().getTime();
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



  API_submitform(_name, _org, _function, _email, _acc ): Observable < any > {
    // tslint:disable-next-line:max-line-length
    const url = environment.apilink + 'submitform?rnd=' + new Date().getTime();


    const upt = {
      'naam': _name,
      'organisatie': _org,
      'functie': _function,
      'email': _email,
      'accreditatie': _acc
    };
    // const body = JSON.stringify(upt);


    // const howmanykb = this.byteCount(body);
    // Line beneath show how many KB
    const headers = {
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache',
      'Expires': '0',
      'Pragma': 'no-cache'
      /*  ,'Authorization': 'bearer ' + this.curTOKEN */
    };
    const headersConfig = new HttpHeaders(headers);

    const options = {
      headers: headersConfig,
      method: 'post'
    };
  
      return this.http.post(url, upt, options)
      .pipe(throttleTime(5000));
  }


  // EDITUSER
  API_edituser(_uid, _name,_email, _org, _func, _acc): Observable < any > {
    // tslint:disable-next-line:max-line-length
    const url = environment.apilink + 'edituser/' + _uid + '?rnd=' + new Date().getTime();
    
    const upt = {
      'naam': _name,
      'organisatie': _org,
      'functie': _func,
      'email': _email,
      'acc': _acc
    };
    // const body = JSON.stringify(upt);


    // const howmanykb = this.byteCount(body);
    // Line beneath show how many KB
    const headers = {
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache',
      'Expires': '0',
      'Pragma': 'no-cache'
      /*  ,'Authorization': 'bearer ' + this.curTOKEN */
    };
    const headersConfig = new HttpHeaders(headers);

    const options = {
      headers: headersConfig,
      method: 'post'
    };
  
      return this.http.post(url, upt, options)
      .pipe(throttleTime(5000));
  }

  
   // is max form reaced?
   API_checkuser(_userid, _check): Observable < any > {
    const url = environment.apilink + 'checkuser/' +_userid + '/' + _check + '?rnd=' + new Date().getTime();
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
