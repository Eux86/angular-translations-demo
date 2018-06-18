import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserConfigurationService } from '../../user-configuration.service';

@Component({
  selector: 'app-alpha-page',
  templateUrl: './alpha-page.component.html',
  styleUrls: ['./alpha-page.component.css']
})
export class AlphaPageComponent implements OnInit {

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
