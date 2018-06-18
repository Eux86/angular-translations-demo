import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserConfigurationService } from '../../user-configuration.service';

@Component({
  selector: 'app-beta-page',
  templateUrl: './beta-page.component.html',
  styleUrls: ['./beta-page.component.css']
})
export class BetaPageComponent implements OnInit {

  constructor(
    private readonly translator:TranslateService,
    private readonly userConfiguration: UserConfigurationService
  ) { 
    translator.setDefaultLang(userConfiguration.getLanguage());

    userConfiguration.languageChange$.subscribe(language=>translator.setDefaultLang(language));
  }

  ngOnInit() {
  }

}
