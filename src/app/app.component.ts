import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserConfigurationService } from './user-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private translator: TranslateService,
    private readonly userConfiguration: UserConfigurationService
  ) 
  {
    translator.setDefaultLang(userConfiguration.getLanguage());

    userConfiguration.languageChange$.subscribe(lan=>translator.setDefaultLang(lan));
  }

  setLanguage(lan):void{
    this.userConfiguration.setLanguage(lan);
  }
}
