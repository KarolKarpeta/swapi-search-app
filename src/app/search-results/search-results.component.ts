import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.search('');
  }

  onPrevious() {
    this.searchService.previousPage();
  }

  onNext() {
    this.searchService.nextPage();
  }

}
