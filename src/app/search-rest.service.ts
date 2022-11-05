import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class SearchRestService {
    constructor(private httpCLient: HttpClient) {}

    search(searchPhrase: string, page: number): Observable<any> {
        return this.httpCLient.get<any>(`https://swapi.dev/api/people?search=${searchPhrase}&page=${page}`);
    }
}