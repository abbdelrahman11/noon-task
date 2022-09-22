import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  GetMainSliders() {
    const headers = {
      lang: 'en',
    };
    const body = { googleId: 'ChIJ88rv8bI_WBQRkvVBLDeZQUg' };
    return this.http.post<any>(
      'https://satatechnologygroup.net:3301/api/MobileMainPage/GetMainSliders',
      body,
      { headers }
    );
  }
  getAllCatogories() {
    return this.http.get(
      'https://satatechnologygroup.net:3301/api/Categories/index'
    );
  }
  GetHomePage() {
    const headers = {
      lang: 'en',
    };
    const body = { googleId: 'ChIJ88rv8bI_WBQRkvVBLDeZQUg' };
    return this.http.post<any>(
      'https://satatechnologygroup.net:3301/api/MobileMainPage/GetHomePage',
      body,
      { headers }
    );
  }
}
