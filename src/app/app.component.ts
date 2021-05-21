import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internationalization-example';

  constructor(public translateService: TranslateService, @Inject(DOCUMENT) private document: Document) {
    translateService.addLangs(['en', 'ar', 'sp']);   //set array of languages
    translateService.setDefaultLang('en');    // set default language
    const browserLanguage = translateService.getBrowserLang();
    translateService.use(browserLanguage.match(/en|ar|sp/) ? browserLanguage : 'en');   //if browser language is not from our supported language then set english as laguage
  }

  chnagelanguage(language: string) {
    this.translateService.use(language);
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = language === 'ar' ? 'rtl' : 'ltr';      // change direction of rendering by  `<html dir="rtl"> </html>`
  }

}
