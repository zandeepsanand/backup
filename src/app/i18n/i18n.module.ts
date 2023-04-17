import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { LangChangeEvent, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}
@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      },
      isolate:true
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'Cookie'
    })
  ],
  exports: [TranslateModule]
})
// export class I18nModule {
//   locale = [
//     { id: 'en', name: 'English' },
//     { id: 'de', name: 'German' },
//     { id: 'ar', name: 'Arabic' },
//   ];
 
//   languageMapping = new Map<string, string>();
//   constructor(translate: TranslateService , translateCacheService: TranslateCacheService) {
//     translateCacheService.init();
//     translate.addLangs(['en', 'de' , 'ar']);
//      this.locale.forEach(lang => {
//       this.languageMapping.set(lang.id, lang.name);
//     });
   
    
    
//     const cachedLang = translateCacheService.getCachedLanguage();
//     const browserLang = translate.getBrowserLang();
    
//     translate.use(String(cachedLang) || String(browserLang));
  

//   }
  
// }

export class I18nModule {
  locales: any;
  languageMapping = new Map<string, string>();
  locale: { id: string; name: string; }[];
 

 
  constructor(private translate: TranslateService, private translateCacheService: TranslateCacheService) {
   
    this.translateCacheService.init();
    translate.addLangs(['en', 'de', 'ar']);

    this.locale = [
      { id: 'en', name: 'English' },
      { id: 'de', name: 'German' },
      { id: 'ar', name: 'Arabic' },
    ];
  
    this.languageMapping = new Map<string, string>();
    this.locale.forEach(lang => {
      this.languageMapping.set(lang.id, lang.name);
    });
  
  
    const cachedLang = translateCacheService.getCachedLanguage();
    const browserLang = translate.getBrowserLang();
    const langToUse = cachedLang || browserLang || 'en';
  
    translate.use(langToUse);

  }
  
 

}
export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


