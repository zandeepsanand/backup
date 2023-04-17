import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

interface TokenRefreshResponse {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private readonly refreshTokenUrl: string = `${environment.ggeraUrl}/token/refresh`;
  private readonly tokenKey: string = "token";
  server_address: string = environment.ggeraUrl;

  constructor(private httpClient: HttpClient, private router: Router) {
    const initialAccessToken = environment.ggeraToken;
    this.setAccessToken(initialAccessToken);
  }

 refreshToken(): Observable<any> {
    const refreshToken = this.getAccessToken();
    
    // console.log(refreshToken);

    if (!refreshToken) {
      return throwError("Token not found in env");
    }

    const headers = new HttpHeaders().set("Authorization", refreshToken);
    const url = `${this.server_address}/token/refresh`;

    return this.httpClient.post<TokenRefreshResponse>(url, null, {
      headers: headers
    }).pipe(
      tap((response: any) => {
        const newAccessToken = response.data.token;
        const newRefreshToken = response.refresh_token;
        this.setAccessToken(newAccessToken);
        this.setRefreshToken(newRefreshToken);
        // console.log(response);
        
        
      }),
      catchError((error) => {
        console.error("Error refreshing token:", error);
        // this.logout(); // logout the user if refresh token fails
        return throwError(error);
      })
    );
  }

  public setAccessToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public removeAccessToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public setRefreshToken(refreshToken: string): void {
    localStorage.setItem("refreshToken", refreshToken);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem("refreshToken");

  }

  public removeRefreshToken(): void {
    localStorage.removeItem("refreshToken");
  }
  get Token(){
    return localStorage.getItem("refreshToken");
  }

}
