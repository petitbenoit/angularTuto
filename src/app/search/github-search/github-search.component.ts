import { FormControl } from '@angular/forms';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap, retry, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers: [SearchService]
})
export class GithubSearchComponent implements OnInit {

  search = new FormControl();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(500), // watching a delay of 500ms between consecutive key strokes (300/500ms)
      distinctUntilChanged(), // only when the value is different from the previous value.
      switchMap((value) => this.searchService.getRepository(value)), // managing the request (cancellation)
      retry(3)
    )
    .subscribe((value) => {
      console.log(value);
     // this.searchRepo(value);
    })
  }

  searchRepo(query : string) {
    this.searchService.getRepository(query).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error)
      }
    )
  }


}
