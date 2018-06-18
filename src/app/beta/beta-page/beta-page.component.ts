import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-beta-page',
  templateUrl: './beta-page.component.html',
  styleUrls: ['./beta-page.component.css']
})
export class BetaPageComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
  }

}
