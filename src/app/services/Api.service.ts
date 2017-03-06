import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
    public apiUrl =`http://58b9381f3f81481200a9dd9c.mockapi.io/User/User`;

    constructor(private http: Http) { }



  // getUser() {
  //   return this.http.get(this.apiUrl)
  //   .map((res:Response) => res.json());
  // }

 getUser(): Observable<any[]> {
        return this.http.get(this.apiUrl).map((response: Response) => response.json())
    }

  // postUser(data:any){
  //     return this.http.post(this.apiUrl,any)
  //      .map((res:Response) => res.json());
  // }
 createUser(data: any): Observable<any> {
        return this.http.post(this.apiUrl, data).map((response: Response) => response.json())
    }
   
  
}