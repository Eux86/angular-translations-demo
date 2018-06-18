import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserConfigurationService {

  private currentLanguage = "en";
  private languageChangedObserver: Observer<string>;
  public languageChange$:Observable<string>;
  

  constructor() { 
    this.languageChange$=new Observable(observer=>this.languageChangedObserver=observer);
  }

  getLanguage():string{
    return this.currentLanguage;
  }

  setLanguage(language:string):void {
    this.currentLanguage = language;
    this.languageChangedObserver.next(language);
  }


}
