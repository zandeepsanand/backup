import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    server_address: string = environment.ggeraUrl;
    token: string = environment.ggeraToken;
    http: any;

    constructor(private httpClient: HttpClient) {}

    public getPlayers() {
        let head_obj = new HttpHeaders().set("Authorization", this.token);
        return this.httpClient.get(`${this.server_address}/pro/list`, {
            headers: head_obj,
        });
    }
    public getParty() {
        let head_obj = new HttpHeaders().set("Authorization", this.token);
        return this.httpClient.get(`${this.server_address}/premade`, {
            headers: head_obj,
        });
    }
    public uploadContact(data:any) {

      let head_obj = new HttpHeaders().set("Authorization", this.token);
      return this.httpClient.post(`${this.server_address}/contact`,data , {
        headers:head_obj
      });
  }
  public applyNow(data:any) {

    let head_obj = new HttpHeaders().set("Authorization", this.token);
    return this.httpClient.post(`${this.server_address}/apply-job`,data , {
      headers:head_obj
    });
}
}
