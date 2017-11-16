import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MbsModulesApi, MbsModule } from 'mbs/types/mbs.type';


@Injectable()
export class ModuleService {

  private readonly mbsUrl: string = 'https://mbs.fedoraproject.org/module-build-service/1/'
  constructor(private http: HttpClient) { }

  getModules (page: number = 1): Observable<MbsModulesApi> {
    return this.http.get<MbsModulesApi>(this.mbsUrl + 'module-builds/?per_page=40&page=' + page);
  }

  getModule (id: number): Observable<MbsModule> {
    return this.http.get<MbsModule>(this.mbsUrl + 'module-builds/' + id);
  }
}
