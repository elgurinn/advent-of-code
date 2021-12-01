import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InputsService {
  constructor(private http: HttpClient) {}

  getInput(day: string) {
    console.log(`Fetching input for ${day}`);

    return this.http.get(`assets/inputs/${day}.txt`, {
      responseType: 'text',
    });
  }
}
