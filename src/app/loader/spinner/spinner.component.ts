import { LoaderService } from './../loader.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  loading$ : Observable<boolean>;
  constructor(private loaderService: LoaderService) { 
    this.loading$ = this.loaderService.loadingObservable;
  }

  ngOnInit(): void {
  }

}
