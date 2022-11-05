import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Person } from "./person.model";
import { SearchRestService } from "./search-rest.service";

@Injectable({providedIn: 'root'})
export class SearchService {
    searchResult = new BehaviorSubject<Person[]>([]);
    isLoading = false;
    page = 1;
    lastSearchPhrase = '';

    public searchResult$: Observable<Person[]> = this.searchResult;

    constructor(private _searchRestService: SearchRestService) {}

    search(searchPhrase: string) {
        this.isLoading = true;
        this.lastSearchPhrase = searchPhrase;
        this._searchRestService.search(searchPhrase, this.page).subscribe(
            searchResult => {
                this.searchResult.next(searchResult.results);
                this.isLoading = false;
            }, error => {
                console.log(error);
                this.isLoading = false;
                this.page--;
            }
        );
    }

    nextPage() {
       this.page++;
       this.search(this.lastSearchPhrase);
    }

    previousPage() {
        if(this.page > 1) {
            this.page--;
            this.search(this.lastSearchPhrase);
        }
    }

}