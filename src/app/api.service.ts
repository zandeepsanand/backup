import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    server_address: string = environment.ggeraUrl;
    http: any;

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {}

    private getHeaders(): HttpHeaders {
        const token = this.authService.getAccessToken();
        if (!token) {
            // Handle error here
            console.error("Access token not found");
            return new HttpHeaders();
        }

        return new HttpHeaders().set("Authorization", token);
    }

    public getPlayers() {
        return this.httpClient.get(`${this.server_address}/pro/list`, {
            headers: this.getHeaders(),
        });
    }

    public getParty() {
        return this.httpClient.get(`${this.server_address}/premade`, {
            headers: this.getHeaders(),
        });
    }

    public uploadContact(data:any) {
        return this.httpClient.post(`${this.server_address}/contact`, data, {
            headers: this.getHeaders(),
        });
    }

    public applyNow(data:any) {
        return this.httpClient.post(`${this.server_address}/apply-job`, data, {
            headers: this.getHeaders(),
        });
    }
  
}
