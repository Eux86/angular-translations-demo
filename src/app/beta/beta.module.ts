import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetaRoutingModule } from './beta-routing.module';
import { BetaPageComponent } from './beta-page/beta-page.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    BetaRoutingModule,

    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [BetaPageComponent]
})
export class BetaModule { }


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/beta/', '.json');
}