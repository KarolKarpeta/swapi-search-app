import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchPhrase: string = '';

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  onType() {
    this._searchService.page = 1;
    this._searchService.search(this.searchPhrase);
  }

}
