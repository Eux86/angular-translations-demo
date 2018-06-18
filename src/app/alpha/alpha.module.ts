import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphaRoutingModule } from './alpha-routing.module';
import { AlphaPageComponent } from './alpha-page/alpha-page.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    AlphaRoutingModule,

    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [AlphaPageComponent]
})
export class AlphaModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/alpha/', '.json');
}