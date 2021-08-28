import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _status: boolean = false;
  private loaderSubject = new BehaviorSubject<boolean>(this._status);
  loadingObservable: Observable<boolean>;

  constructor() { 
    this.loadingObservable = this.loaderSubject.asObservable();
  }

  showLoader() {
    this._status = true;
    this.loaderSubject.next(this._status);
  }
  hideLoader() {
    this._status = false;
    this.loaderSubject.next(this._status);
  }
  toggleLoader() {
    this._status = !this._status;
    this.loaderSubject.next(this._status);
  }

}
