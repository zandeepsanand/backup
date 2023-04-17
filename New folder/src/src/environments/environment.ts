// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: "http://localhost:8887/api",
    originUrl: "http://localhost:4200",
    wsUrl: "http://localhost:8887",
    ggeraUrl: "https://api.ggera.com/static",
    ggeraToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ2dlcmEuY29tIiwidXNlcm5hbWUiOiJBZG1pbiJ9LCJpYXQiOjE2Njc1MzQ5Mzh9.HQOPDeeGsY74hsZ-fHMmaOWr3oHCuHTaztqqYz0WnZw",

    ggeraPremade: "https://gaming.ggera.com/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
